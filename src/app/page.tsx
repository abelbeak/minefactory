import { PATH_SERVERLIST } from '@/types/page-types';
import { redirect } from 'next/navigation';

export default function Home() {
    redirect(PATH_SERVERLIST);
    return <></>;
}
