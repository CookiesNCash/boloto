import React from "react"

export default function RightMessage ({children} : {
    children: React.ReactNode;
}) {
    return (
        <div className="bubble right">{children}</div>
    )
}
