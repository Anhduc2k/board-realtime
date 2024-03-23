"use client";

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { formatDistanceToNow } from "date-fns";
import { Overlay } from '@/app/(dashboard)/_component/board-card/overlay';
import { Footer } from '@/app/(dashboard)/_component/board-card/footer';
import { Skeleton } from '@/components/ui/skeleton';

interface BoardCardProps {
    id: string;
    title: string;
    authorName: string;
    authorId: string;
    createdAt: number;
    imageUrl: string;
    orgId: string;
    isFavorite: boolean;
  };
const BoardCard = ({
    id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  orgId,
  isFavorite,
}: BoardCardProps) => {
    const { userId } = useAuth();
    const authorLabel = userId === authorId ? "You" : authorName;
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true,
    });
  return (
    <Link href={`board/${id}`}>
        <div className='group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden'>
            <div className='relative flex-1 bg-amber-50'>
                <Image fill src={imageUrl} alt="title" className='object-fit'/>
                <Overlay />
            </div>
            <Footer isFavorite={isFavorite} title={title} authorLabel={authorLabel}
            createdAtLabel={createdAtLabel} onClick={() => {}} disabled={false}/>
        </div>
    </Link>
  )
}

export default BoardCard;
BoardCard.Skeleton = function BoardCardSkeleton() {
    return (
      <div className="aspect-[100/127] rounded-lg overflow-hidden">
        <Skeleton className="h-full w-full" />
      </div>
    );
  };