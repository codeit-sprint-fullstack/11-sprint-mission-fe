// ===============================
// import
// ===============================
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./services/ProductService.js";

import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./services/ArticleService.js";

// ===============================
// DOM
// ===============================
const productListEl = document.getElementById("productList");
const productLoadingEl = document.getElementById("productLoading");

const articleListEl = document.getElementById("articleList");
const articleLoadingEl = document.getElementById("articleLoading");

// ===============================
// 상품 목록 렌더링 (async / await)
// ===============================
async function renderProductList() {
  try {
    const data = await getProductList({
      page: 1,
      pageSize: 10,
      keyword: "",
    });

    productLoadingEl.style.display = "none";
    productListEl.innerHTML = "";

    data.list.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - ${product.price}원`;

      li.addEventListener("click", async () => {
        const detail = await getProduct(product.id);
        console.log("상품 상세", detail);
      });

      productListEl.appendChild(li);
    });
  } catch (error) {
    console.error(error);
    productLoadingEl.textContent = "상품 목록을 불러오지 못했습니다.";
  }
}

// ===============================
// 게시글 목록 렌더링 (.then / .catch)
// ===============================
function renderArticleList() {
  getArticleList({
    page: 1,
    pageSize: 10,
    keyword: "",
  })
    .then((data) => {
      articleLoadingEl.style.display = "none";
      articleListEl.innerHTML = "";

      data.list.forEach((article) => {
        const li = document.createElement("li");
        li.textContent = article.title;

        li.addEventListener("click", () => {
          getArticle(article.id).then((detail) => {
            console.log("게시글 상세", detail);
          });
        });

        articleListEl.appendChild(li);
      });
    })
    .catch((error) => {
      console.error(error);
      articleLoadingEl.textContent = "게시글 목록을 불러오지 못했습니다.";
    });
}


// ===============================
// 실행 : 데이타 확인 및 점검 목적
// ===============================
renderProductList();
renderArticleList();

// 아래 전체는 상품목록과 게시글 목록에 대한 TEST점검을 위한 코드입니다.
// 운영시 반드시 제거 필요합니다.
let testProductId = null;
let testArticleId = null;
document.getElementById("btnGet").addEventListener("click", async () => {
  try {
    const data = await getProductList({
      page: 1,
      pageSize: 50, // 넉넉히
    });

    // 🔍 [TEST-dolby] 테스트 상품 찾기
    const found = data.list.find(
      (product) => product.name === "[TEST-dolby] 테스트 상품"
    );

    if (!found) {
      console.log("❌ [TEST-dolby] 테스트 상품을 찾지 못했습니다.");
      testProductId = null;
      return;
    }

    testProductId = found.id;
    console.log("📦 테스트 상품 찾음", found);
  } catch (error) {
    console.error("❌ 조회 실패", error);
  }
});

document.getElementById("btnCreate").addEventListener("click", async () => {
  try {
    const created = await createProduct({
      name: "[TEST-dolby] 테스트 상품",
      description: "버튼 테스트용 상품",
      price: 10000,
      tags: ["test"],
      images: [],
    });

    testProductId = created.id; // ⭐ 중요
    console.log("✅ 생성 성공", created);
    await renderProductList();
  } catch (error) {
    console.error("❌ 생성 실패", error);
  }
});
document.getElementById("btnPatch").addEventListener("click", async () => {
  if (!testProductId) {
    alert("먼저 생성 버튼을 눌러주세요!");
    return;
  }

  try {
    const updated = await patchProduct(testProductId, {
      price: 7777,
    });

    console.log("✏️ 수정 성공", updated);
    await renderProductList();
  } catch (error) {
    console.error("❌ 수정 실패", error);
  }
});
document.getElementById("btnDelete").addEventListener("click", async () => {
  if (!testProductId) {
    alert("먼저 조회 버튼을 눌러 테스트 상품을 찾으세요!");
    return;
  }

  try {
    await deleteProduct(testProductId);
    console.log("🗑 [TEST-dolby] 테스트 상품 삭제 완료");

    testProductId = null;
    await renderProductList();
  } catch (error) {
    console.error("❌ 삭제 실패", error);
  }
});

document
  .getElementById("btnArticleGet")
  .addEventListener("click", async () => {
    try {
      getArticleList({
        page: 1,
        pageSize: 50,
      })
        .then((data) => {
          const found = data.list.find(
            (article) => article.title === "[TEST-dolby] 테스트 게시글"
          );
          if (!found) {
            console.log("❌ 테스트 게시글을 찾지 못했습니다.");
            testArticleId = null;
            return;
          }

          testArticleId = found.id;
          console.log("📝 테스트 게시글 찾음", found);
        })
        .catch((error) => {
          console.error("❌ 게시글 조회 실패", error);
        });
    } catch (error) {
      console.error(error);
    }
  });
  
  const btnArticleCreate = document.getElementById("btnArticleCreate");

  if (btnArticleCreate) {
    btnArticleCreate.addEventListener("click", () => {
      createArticle({
        title: "[TEST-dolby] 테스트 게시글",
        content: "테스트용 게시글 내용입니다.",
      })
        .then((data) => {
          testArticleId = data.id;
          console.log("✅ 게시글 생성 완료", data);          
        })
        .catch((error) => {
          console.error("❌ 게시글 생성 실패", error);
        });
    });
  }

  document
  .getElementById("btnArticleUpdate")
  .addEventListener("click", () => {
    if (!testArticleId) {
      alert("먼저 게시글을 조회하거나 생성하세요!");
      return;
    }

    patchArticle(testArticleId, {
      title: "[TEST-dolby] 테스트 게시글",
      content: "게시글 내용이 수정되었습니다.",
    })
      .then((data) => {
        console.log("✏ 게시글 수정 완료", data);
      })
      .catch((error) => {
        console.error("❌ 게시글 수정 실패", error);
      });
  });
  document
  .getElementById("btnArticleDelete")
  .addEventListener("click", async () => {
    if (!testArticleId) {
      alert("먼저 게시글을 조회하세요!");
      return;
    }

    try {
      await deleteArticle(testArticleId);
      console.log("🗑 테스트 게시글 삭제 완료");
      testArticleId = null;
    } catch (error) {
      console.error("❌ 게시글 삭제 실패", error);
    }
  });