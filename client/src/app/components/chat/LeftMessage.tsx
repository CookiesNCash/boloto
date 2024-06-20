import React from 'react';

export default function LeftMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bubble left">{children}</div>;
}
