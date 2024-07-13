import { useEffect, useState } from 'react';
import { StreamVideoClient, StreamVideo } from '@stream-io/video-react-sdk';
import { useUser } from "@clerk/clerk-react";
import axios from 'axios';
import Loader from '../components/Loader';

// import { tokenProvider } from '../actions/stream.actions';

const API_KEY = import.meta.env.VITE_PUBLIC_STREAM_API_KEY;
const SERVER_URL = import.meta.env.VITE_SERVER_URL;

const StreamVideoProvider = ({ children }) => {
  const [videoClient, setVideoClient] = useState();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;
    if (!API_KEY) throw new Error('Stream API key is missing');
    
    // Calling the server for token
    const getToken = async () => {
      const response = await axios(`${SERVER_URL}/token/${user?.id}`);
      const { data:  { token }  }  = response;

      const client = new StreamVideoClient({
        apiKey: API_KEY,
        user: {
          id: user?.id,
          name: user?.username || user?.id,
          image: user?.imageUrl,
        },
        // tokenProvider,
        token,
      });

      setVideoClient(client);
    }

    getToken();
  }, [user, isLoaded]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
