"use client";
import { SessionProvider} from 'next-auth/react';
import { FC, ReactNode } from 'react';

interface Props{
  children:ReactNode;
  session?: any;
}

export const Provider:FC<Props> = ({children, session}) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
