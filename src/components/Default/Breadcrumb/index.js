import React from 'react';
import './index.css';

const Breadcrumb = () => {
  return (
    <div style={{ backgroundColor: 'rgb(239, 239, 239)' }}>
      <div style={{ maxWidth: 1270, margin: 'auto' }}>
        <div class="breadcrumb">
          <a class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="0" href="/">
            Trang chủ
          </a>
          <a
            class="breadcrumb-item"
            data-view-id="breadcrumb_item"
            data-view-index="1"
            href="/phu-kien-thoi-trang/c27498"
          >
            Phụ kiện thời trang
          </a>
          <a href="#" class="breadcrumb-item" data-view-id="breadcrumb_item" data-view-index="4">
            <span>Thắt Lưng Nam Dây Da Phong Cách Hàn Quốc Khóa Tự Động - TOPEE OTOL5 (Đen)</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
