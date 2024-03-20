"use client";

import { EmptyBoards } from "@/app/(dashboard)/_component/empty-board";
import { EmptyFavorites } from "@/app/(dashboard)/_component/empty-favorites";
import { EmptySearch } from "@/app/(dashboard)/_component/empty-search";
import React from "react";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];

  if (!data?.length && query.search) {
    return <EmptySearch />
  }

  if (!data?.length && query.favorites) {
    return <EmptyFavorites />
  }

  if (!data?.length) {
    return <EmptyBoards />
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default BoardList;
