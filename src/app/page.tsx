'use client';

import {
  About,
  Contact,
  Experience,
  FeaturedProjects,
  Layout,
  Skills,
} from '@/containers';
import { Hero } from '@/containers';

import { Icon } from '@iconify/react';
import Vapi from '@vapi-ai/web';
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import AudioVisualizer from '@/components/AudioVisualizer';

const vapi = new Vapi('3fa5a02c-d3e5-4e57-acfd-3a912a02df16');

/**
 * TODO: Create separate page for all the projects with filters (vercel | netlify | github api for automation)
 * TODO: Switch to next13 app dir feature, when lottie files start working in app dir
 * TODO: Try test cases
 */

const Home: NextPage = () => {
  const [isVapiActive, setIsVapiActive] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isTalkingOpen, setIsTalkingOpen] = useState(false);
  const [isAgentSpeaking, setIsAgentSpeaking] = useState(false);

  useEffect(() => {
    const handleCallStart = () => {
      setIsVapiActive(true);
      setError(null);
      setIsTalkingOpen(true);
    };

    const handleCallEnd = () => {
      setIsVapiActive(false);
      setIsListening(false);
      setIsTalkingOpen(false);
      setIsAgentSpeaking(false);
    };

    const handleSpeechStart = () => {
      setIsAgentSpeaking(true);
    };

    const handleSpeechEnd = () => {
      setIsAgentSpeaking(false);
    };

    const handleVolumeLevel = (volume: number) => {
      // We can use volume level for more dynamic visualization if needed
      console.log(`Volume level: ${volume}`);
    };

    const handleMessage = (message: any) => {
      // Handle transcription messages to detect user speech
      if (message.type === 'transcript') {
        setIsListening(true);
      }
    };

    const handleError = (error: any) => {
      setIsVapiActive(false);
      setIsListening(false);
      if (
        error?.name === 'NotAllowedError' ||
        error?.message?.includes('permission')
      ) {
        setError('Please allow microphone access to use voice chat');
      } else if (error?.type === 'no-room') {
        setError(
          'Assistant configuration error. Please check your Vapi dashboard.'
        );
      } else {
        setError('An error occurred with the voice assistant.');
      }
    };

    vapi.on('call-start', handleCallStart);
    vapi.on('call-end', handleCallEnd);
    vapi.on('speech-start', handleSpeechStart);
    vapi.on('speech-end', handleSpeechEnd);
    vapi.on('volume-level', handleVolumeLevel);
    vapi.on('message', handleMessage);
    vapi.on('error', handleError);

    return () => {
      vapi.off('call-start', handleCallStart);
      vapi.off('call-end', handleCallEnd);
      vapi.off('speech-start', handleSpeechStart);
      vapi.off('speech-end', handleSpeechEnd);
      vapi.off('volume-level', handleVolumeLevel);
      vapi.off('message', handleMessage);
      vapi.off('error', handleError);
    };
  }, []);

  const requestMicrophonePermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleVapiButton = async () => {
    try {
      setError(null);
      if (isVapiActive) {
        await vapi.stop();
      } else {
        const hasPermission = await requestMicrophonePermission();
        if (!hasPermission) {
          setError('Please allow microphone access to use voice chat');
          return;
        }

        await vapi.start('3987ab6d-a529-4841-ad89-f8d333a099ba');
      }
    } catch (error: any) {
      setIsVapiActive(false);
      setIsListening(false);
      if (
        error?.name === 'NotAllowedError' ||
        error?.message?.includes('permission')
      ) {
        setError('Please allow microphone access to use voice chat');
      } else if (error?.type === 'no-room') {
        setError(
          'Assistant configuration error. Please check your Vapi dashboard.'
        );
      } else {
        setError('An error occurred while starting the voice assistant.');
      }
    }
  };

  return (
    <>
      <Layout>
        {isTalkingOpen ? (
          <div className="w-full h-screen flex flex-col justify-center items-center dark:text-white text-black">
            <Icon icon="mdi:microphone" className="w-20 h-20 mb-4" />
            <AudioVisualizer 
              isActive={isVapiActive} 
              isListening={isListening}
              isAgentSpeaking={isAgentSpeaking}
            />
            <p className="text-xl mt-4">
              {isListening ? "I'm listening..." : isAgentSpeaking ? "I'm speaking..." : "Let's chat!"}
            </p>
          </div>
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <FeaturedProjects />
            <Contact />
          </>
        )}
        <button
          className={`flex flex-row items-center fixed top-1/2 -translate-y-1/2 px-6 py-4 rounded-l-full transition-all duration-200
            ${isVapiActive ? 'right-0' : 'right-[-120px] hover:right-0'}
            ${isVapiActive
              ? 'bg-red-500 text-white'
              : 'bg-black text-white dark:bg-white dark:text-black'
            }`}
          onClick={handleVapiButton}
        >
          <Icon
            icon={isListening ? 'mdi:microphone' : 'mdi:microphone-off'}
            className="w-6 h-6 mr-2"
          />
          {isListening ? 'Listening...' : 'Talk with me'}
        </button>
      </Layout>
    </>
  );
};

export default Home;
