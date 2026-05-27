"use client";

import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  // 타입은 주석으로만 명시
  const audioRef = useRef(null); // <-- HTMLAudioElement | null 타입 암시

  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 저장된 상태 불러오기
    const savedTime = localStorage.getItem("music-current-time");
    const savedMuted = localStorage.getItem("music-muted") === "true";

    if (savedTime) audio.currentTime = parseFloat(savedTime);
    audio.muted = savedMuted;
    setMuted(savedMuted);

    audio.volume = 0.2;
    audio.loop = true;

    // 재생 위치 저장
    const interval = setInterval(() => {
      if (!audio.paused) {
        localStorage.setItem("music-current-time", audio.currentTime.toString());
      }
    }, 1000);

    return () => {
      clearInterval(interval);
      if (audio) {
        localStorage.setItem("music-current-time", audio.currentTime.toString());
      }
    };
  }, []);

  // 음소거 토글
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !muted;
    setMuted(!muted);
    localStorage.setItem("music-muted", (!muted).toString());
  };

  // 재생 버튼 클릭 시 음악 재생
  const handlePlayMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    // 항상 처음부터 재생되도록
    audio.pause();
    audio.currentTime = 0;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => console.log("음악 재생 실패:", err));
    }
  };

  return (
    <div className="flex items-center gap-2 bg-white/70 backdrop-blur-md shadow-lg px-3 py-1.5 rounded-full border border-gray-300">
      {/* 재생 버튼 */}
      <button
        onClick={handlePlayMusic}
        className="bg-blue-500 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full shadow hover:bg-blue-600 transition"
        aria-label="음악 재생"
      >
        🎵 <span className="hidden sm:inline">재생</span>
      </button>

      {/* 음소거 버튼 */}
      <button
        onClick={toggleMute}
        className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
        aria-label={muted ? "음소거 해제" : "음소거"}
      >
        {muted ? (
          <>
            🔇 <span className="text-xs sm:text-sm hidden sm:inline">음소거 해제</span>
          </>
        ) : (
          <>
            🔊 <span className="text-xs sm:text-sm hidden sm:inline">음소거</span>
          </>
        )}
      </button>

      {/* 오디오 엘리먼트 */}
      <audio ref={audioRef} src="/song.mp3" preload="auto" />
    </div>
  );
};

export default MusicPlayer;