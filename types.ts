import React from 'react';

export enum Sector {
  BTP = 'BTP',
  INDUSTRIE = 'Industrie',
  EVENT = 'Événementiel',
  PARTICULIER = 'Particulier'
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan?: string; // For Bento Grid layout
}

export interface ProductItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}