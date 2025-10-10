<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IG 模擬牆</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      background-color: #fff;
      color: #000;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    header {
      position: fixed;
      top: 0;
      width: 100%;
      max-width: 480px;
      background: #fff;
      border-bottom: 1px solid #dbdbdb;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 15px;
      z-index: 10;
    }
    header h1 {
      font-size: 20px;
      margin: 0;
      font-weight: 600;
    }
    .add-btn {
      font-size: 24px;
      cursor: pointer;
    }
    .posts {
      margin-top: 70px;
      width: 100%;
      max-width: 480px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 10px;
    }
    .post {
      width: 100%;
      aspect-ratio: 3/4;
      background: #f0f0f0;
      border: 1px solid #dbdbdb;
      border-radius: 6px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .post img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    /* 上傳彈窗 */
    #uploadModal {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      background: rgba(0,0,0,0.5);
      display: none;
      justify-content: center;
      align-items: center;
      z-index: 20;
    }
    .upload-box {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      text-align: center;
      width: 90%;
      max-width: 300px;
    }
    input[type="file"] {
      display: none;
    }
    .btn {
      background: #0095f6;
      color: white;
      padding: 8px 15px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }
  </style>
</head>
<body>
  <header>
    <h1>IG 模擬牆</h1>
    <div class="add-btn" onclick="openUpload()">＋</div>
  </header>

  <div class="posts" id="posts"></div>

  <div id="uploadModal">
    <div class="upload-box">
      <h3>上傳貼文</h3>
      <input type="file" id="fileInput" accept="image/*" />
      <button class="btn" onclick="document.getElementById('fileInput').click()">選擇圖片</button>
      <br />
      <button class="btn" style="background:#ccc;color:#000" onclick="closeUpload()">取消</button>
    </div>
  </div>

  <script>
    const uploadModal = document.getElementById('uploadModal');
    const fileInput = document.getElementById('fileInput');
    const posts = document.getElementById('posts');

    function openUpload() {
      uploadModal.style.display = 'flex';
    }

    function closeUpload() {
      uploadModal.style.display = 'none';
    }

    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          const post = document.createElement('div');
          post.className = 'post';
          post.appendChild(img);
          posts.insertBefore(post, posts.firstChild); // 新貼文在最上面
          closeUpload();
        };
        reader.readAsDataURL(file);
      }
    });
  </script>
</body>
</html>
