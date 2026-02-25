"use server";
import { createArticle } from "@/lib/api/ArticleService";

 // 반드시 서버 액션임을 표시

export async function submitArticle(formData) {
  const title = formData.get("title")?.toString() || "";
  const content = formData.get("content")?.toString() || "";

  if (!title || !content) {
    throw new Error("제목과 내용을 모두 입력해주세요");
  }

  const createdArticle = await createArticle({ title, content });

  return createdArticle; 
}