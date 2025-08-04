export interface childrenProps {
  children: React.ReactNode;
}

export type MetaProps = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessProps = {
  data?: any;
  meta?: MetaProps;
};

export type ParamsProps ={
  params: {
    id: string;
  };
}


export interface childrenProps {
  children: React.ReactNode;
}

export type AuthProps = {
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export type envProps = string | undefined



// profile
import type React from "react"

export interface ActivityProps {
  action: string
  date: string
  type: "profile" | "order" | "security"
}

export interface TabIProps {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

export type TabProps = "overview" | "account" | "security" | "settings"
