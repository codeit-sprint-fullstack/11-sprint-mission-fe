import { getComments } from '@/lib/api';
import * as styles from './CommnetsList.css.js';
import empty from '@public/commnets/Img_reply_empty.svg';
import Image from 'next/image.js';
import Link from 'next/link';
import CommentsListItem from './CommentsListItem/CommentsListItem.jsx';

export default async function CommnetsList({ id }) {
  const data = await getComments(id);
  console.log(data);
  return (
    <div className={styles.container}>
      {data.length === 0 ? (
        <div className={styles.emptyWrapper}>
          <Image src={empty} alt="empty" />
          <div className={styles.emptyText}>
            아직 댓글이 없어요, <br />
            지금 댓글을 달아보세요!
          </div>
        </div>
      ) : (
        <div>
          {data.map((item) => (
            <CommentsListItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <Link href="/freeboard" className={styles.backBtn}>목록으로 돌아가기</Link>
    </div>
  );
}
