'use client'

import { MessagesProvider } from './Messages_Provider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from 'react'

interface AIBot {
  children: ReactNode
}

const AIBotProvider: FC<AIBot> = ({ children }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <MessagesProvider>{children}</MessagesProvider>
    </QueryClientProvider>
  )
}

export default AIBotProvider