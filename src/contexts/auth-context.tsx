
'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

// Define a generic User type to avoid Firebase dependency here
interface MockUser {
  uid: string;
  email: string;
  displayName: string;
}

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: MockUser | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, profile: Omit<UserProfile, 'email'>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const defaultUser: MockUser = {
  uid: 'mock-patient-uid',
  email: 'patient@medbridgee.com',
  displayName: 'Chinta Lokesh Babu',
};

const defaultUserProfile: UserProfile = {
  firstName: 'Chinta',
  lastName: 'Lokesh Babu',
  email: 'patient@medbridgee.com',
  role: 'Patient',
};

const MOCK_EMAIL = 'patient@medbridgee.com';
const MOCK_PASSWORD = 'password123';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<MockUser | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  // Effect to check session storage on initial load
  useEffect(() => {
    try {
      const storedUser = sessionStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
        setUserProfile(defaultUserProfile);
      }
    } catch (error) {
      console.error("Could not parse user from session storage", error);
    } finally {
      setLoading(false);
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        if (email === MOCK_EMAIL && password === MOCK_PASSWORD) {
          setUser(defaultUser);
          setUserProfile(defaultUserProfile);
          sessionStorage.setItem('user', JSON.stringify(defaultUser));
          setLoading(false);
          resolve();
        } else {
          setLoading(false);
          reject(new Error('Invalid email or password.'));
        }
      }, 1000);
    });
  };

  const signOut = async () => {
    setUser(null);
    setUserProfile(null);
    sessionStorage.removeItem('user');
  };

  const signUp = async () => {
    console.log("Sign-up is for demonstration and does not create a real user in this mock setup.");
    // You can add logic here to simulate a successful signup if needed
    return Promise.resolve();
  };

  const value = {
    user,
    userProfile,
    loading,
    signIn,
    signOut,
    signUp,
  };

  return (
    <AuthContext.Provider value={value}>
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
