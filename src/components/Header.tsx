import Link from 'next/link';
import React from 'react';
import { IconLogo } from '@/icon/IconLogo';
import {
    PATH_ANNOUNCE,
    PATH_FORUM,
    PATH_HOME,
    PATH_REFERENCE,
    PATH_SERVERLIST,
    PATH_SIGNIN,
} from '@/types/page-types';

export default function Header() {
    return (
        <header className="h-[68px] border-b border-solid border-gray-300">
            <nav className="container relative flex h-full items-center justify-between">
                <Link href={PATH_HOME}>
                    <IconLogo />
                </Link>
                <ul className="absolute -z-10 flex h-full w-full items-center justify-center text-base font-medium text-gray-900">
                    <li className="px-7">
                        <Link href={PATH_HOME}>마인팩토리 (준비중)</Link>
                    </li>
                    <li className="px-7">
                        <Link href={PATH_ANNOUNCE}>공지 (준비중)</Link>
                    </li>
                    <li className="px-7">
                        <Link href={PATH_FORUM}>포럼 (준비중)</Link>
                    </li>
                    <li className="px-7">
                        <Link href={PATH_REFERENCE}>자료실 (준비중)</Link>
                    </li>
                    <li className="px-7">
                        <Link href={PATH_SERVERLIST}>서버 리스트(준비중)</Link>
                    </li>
                </ul>
                <Link
                    href={PATH_SIGNIN}
                    className="flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-gray"
                >
                    로그인
                </Link>
            </nav>
        </header>
    );
}
