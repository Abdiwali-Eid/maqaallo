import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  FiDownload,
  FiPause,
  FiPlay,
  FiVolume1,
  FiVolume2,
} from 'react-icons/fi';

const SPEED_OPTIONS = [0.75, 1, 1.25, 1.5, 2];

function formatTime(value) {
  if (!Number.isFinite(value) || value < 0) return '0:00';

  const totalSeconds = Math.floor(value);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

function PostAudioPlayer({ audioUrl, title, fileName }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.85);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = volume;
    audio.playbackRate = playbackRate;

    return undefined;
  }, [audioUrl, playbackRate, volume]);

  if (!audioUrl) return null;

  const progress = duration ? (currentTime / duration) * 100 : 0;
  const volumeLabel = volume === 0 ? 'Codka waa dansan yahay' : 'Codka';

  const handleTogglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setIsPlaying(true);
      return;
    }

    audio.pause();
    setIsPlaying(false);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const nextTime = Number(event.target.value);

    if (!audio) return;

    audio.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const handleVolumeChange = (event) => {
    const nextVolume = Number(event.target.value);
    const audio = audioRef.current;

    setVolume(nextVolume);
    if (audio) audio.volume = nextVolume;
  };

  const handleSpeedChange = (event) => {
    const nextRate = Number(event.target.value);
    const audio = audioRef.current;

    setPlaybackRate(nextRate);
    if (audio) audio.playbackRate = nextRate;
  };

  return (
    <PlayerCard aria-label="Article audio narration">
      {/* The custom controls are exposed below; transcript support can attach captions later. */}
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio
        ref={audioRef}
        src={audioUrl}
        preload="metadata"
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onTimeUpdate={(event) =>
          setCurrentTime(event.currentTarget.currentTime)
        }
        onEnded={() => setIsPlaying(false)}
      />

      <div className="player-main">
        <button
          className="play-button"
          type="button"
          onClick={handleTogglePlay}
          aria-label={isPlaying ? 'Jooji maqalka' : 'Daar maqalka'}
        >
          {isPlaying ? <FiPause aria-hidden /> : <FiPlay aria-hidden />}
        </button>

        <div className="track-area">
          <div className="player-heading">
            <span>Dhagayso maqaalkaan</span>
            {title && <strong>{title}</strong>}
          </div>

          <label className="progress-label" htmlFor="post-audio-progress">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </label>
          <input
            id="post-audio-progress"
            className="range-input progress-input"
            type="range"
            min="0"
            max={duration || 0}
            step="0.1"
            value={currentTime}
            onChange={handleSeek}
            aria-label="Audio progress"
            style={{ '--range-progress': `${progress}%` }}
          />
        </div>
      </div>

      <div className="player-controls">
        <label className="volume-control">
          {volume > 0.55 ? (
            <FiVolume2 aria-hidden />
          ) : (
            <FiVolume1 aria-hidden />
          )}
          <span className="sr-only">{volumeLabel}</span>
          <input
            className="range-input volume-input"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            aria-label={volumeLabel}
            style={{ '--range-progress': `${volume * 100}%` }}
          />
        </label>

        <label className="speed-control">
          <span className="sr-only">Xawaaraha maqalka</span>
          <select
            value={playbackRate}
            onChange={handleSpeedChange}
            aria-label="Playback speed"
          >
            {SPEED_OPTIONS.map((speed) => (
              <option key={speed} value={speed}>
                {speed}x
              </option>
            ))}
          </select>
        </label>

        <a
          className="download-link"
          href={audioUrl}
          download={fileName || true}
          aria-label="Download audio narration"
        >
          <FiDownload aria-hidden />
        </a>
      </div>
    </PlayerCard>
  );
}

const PlayerCard = styled.section`
  max-width: 900px;
  margin: -0.5rem auto 2.2rem;
  padding: 1.4rem 1.6rem;
  border: 1px solid rgba(229, 231, 235, 0.95);
  border-radius: 1.6rem;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.045),
    0 1px 2px rgba(15, 23, 42, 0.04);
  font-family: 'Inter', system-ui, sans-serif;

  .player-main,
  .player-controls,
  .volume-control,
  .progress-label {
    display: flex;
    align-items: center;
  }

  .player-main {
    gap: 1.3rem;
  }

  .play-button,
  .download-link {
    width: 4.4rem;
    height: 4.4rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: border-color 160ms ease, color 160ms ease, background 160ms ease,
      transform 160ms ease;
  }

  .play-button {
    border: 0;
    color: #ffffff;
    background: #111827;
    cursor: pointer;

    &:hover {
      background: #2563eb;
      transform: translateY(-1px);
    }
  }

  svg {
    width: 1.9rem;
    height: 1.9rem;
  }

  .track-area {
    min-width: 0;
    flex: 1;
  }

  .player-heading {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.2rem;
    margin-bottom: 0.65rem;
  }

  .player-heading span {
    color: #2563eb;
    font-size: 1.25rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .player-heading strong {
    color: #374151;
    font-size: 1.35rem;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .progress-label {
    justify-content: space-between;
    color: #6b7280;
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }

  .range-input {
    --range-progress: 0%;
    width: 100%;
    height: 0.45rem;
    appearance: none;
    border-radius: 999px;
    background: linear-gradient(#2563eb, #2563eb) 0 / var(--range-progress) 100%
        no-repeat,
      #e5e7eb;
    cursor: pointer;
  }

  .range-input:focus-visible,
  button:focus-visible,
  select:focus-visible,
  a:focus-visible {
    outline: 3px solid rgba(37, 99, 235, 0.28);
    outline-offset: 3px;
  }

  .range-input::-webkit-slider-thumb {
    appearance: none;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #2563eb;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.18);
  }

  .range-input::-moz-range-thumb {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #2563eb;
    box-shadow: 0 2px 8px rgba(15, 23, 42, 0.18);
  }

  .player-controls {
    gap: 1.1rem;
    margin-top: 1.2rem;
    padding-left: 5.7rem;
  }

  .volume-control {
    gap: 0.7rem;
    color: #6b7280;
    min-width: 13rem;
  }

  .volume-input {
    max-width: 9rem;
  }

  .speed-control select {
    min-height: 3.4rem;
    border: 1px solid #e5e7eb;
    border-radius: 0.9rem;
    background: #ffffff;
    color: #374151;
    font-size: 1.3rem;
    font-weight: 700;
    padding: 0 0.9rem;
  }

  .download-link {
    width: 3.6rem;
    height: 3.6rem;
    border: 1px solid #e5e7eb;
    color: #374151;
    background: #ffffff;

    &:hover {
      color: #2563eb;
      border-color: rgba(37, 99, 235, 0.28);
      background: #f8fafc;
    }
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media only screen and (max-width: 640px) {
    margin-top: -0.2rem;
    padding: 1.3rem;
    border-radius: 1.4rem;

    .player-main {
      gap: 1rem;
    }

    .play-button {
      width: 4rem;
      height: 4rem;
    }

    .player-heading {
      align-items: flex-start;
      flex-direction: column;
      gap: 0.25rem;
    }

    .player-heading strong {
      max-width: 100%;
      font-size: 1.25rem;
    }

    .player-controls {
      justify-content: space-between;
      padding-left: 0;
    }

    .volume-control {
      min-width: 11rem;
      flex: 1;
    }

    .volume-input {
      max-width: none;
    }
  }
`;

export default PostAudioPlayer;
