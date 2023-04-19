import { PATH_SERVERLIST } from '@/types/page-types';
import { redirect } from 'next/navigation';

export default function ForumHome() {
    redirect(PATH_SERVERLIST);
    return <></>;
}
