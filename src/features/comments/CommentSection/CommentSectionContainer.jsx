import CommentSection from './CommentSection';
import { getComments } from '@/services/commentService';

export default async function CommentSectionContainer({ type, id }) {
  const initialComments = await getComments(type, id);

  return (
    <CommentSection
      type={type}
      id={id}
      initialComments={initialComments || []}
    />
  );
}
