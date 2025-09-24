
'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { User } from 'firebase/auth';
import { useRouter, usePathname } from 'next/navigation';
import { Loader2 } from 'lucide-react';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  signUp: (email: string, password: string, profile: Omit<UserProfile, 'email'>) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const mockUser = {
  uid: 'mock-patient-uid',
  email: 'patient@medbridgee.com',
  displayName: 'Chinta Lokesh Babu',
} as User;

const mockUserProfile: UserProfile = {
  firstName: 'Chinta',
  lastName: 'Lokesh Babu',
  email: 'patient@medbridgee.com',
  role: 'Patient',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(mockUser);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(mockUserProfile);
  const [loading, setLoading] = useState(false); // Set to false as we are not fetching auth state

  const signUp = async () => { console.log("Sign-up is disabled in mock mode."); };
  const signIn = async () => { console.log("Sign-in is disabled in mock mode."); };
  const signOut = async () => { console.log("Sign-out is disabled in mock mode."); };

  const value = {
    user,
    userProfile,
    loading,
    signUp,
    signIn,
    signOut,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
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
