# 6651071093_LAB2 — Mái Ấm Nhỏ

Website nhận nuôi thú cưng được cá nhân hóa theo MSSV 6651071093.

## Kết quả tính cá nhân hóa
- S = 38
- D = 38 mod 15 = 8 → Nhận nuôi thú cưng
- F = 93 mod 10 = 3 → Biểu đồ thống kê, lọc theo khoảng giá/ngày, animation chuyển trang
- C = 6 mod 5 = 1 → Emerald `#059669`

## Công nghệ
React 18, TypeScript strict, Vite, Tailwind CSS, React Router v6, Recharts, Vitest.

## Cài đặt và chạy
Yêu cầu Node.js phiên bản LTS.

```bash
npm install
npm run dev
```

Mở địa chỉ localhost mà Vite hiển thị trên terminal.

## Kiểm tra trước khi nộp

```bash
npx tsc --noEmit
npx eslint .
npm run test
npm run build
```

## Triển khai
Có thể triển khai lên Vercel hoặc Netlify bằng cách kết nối repository GitHub:
- Build command: `npm run build`
- Output directory: `dist`

Dự án dùng `HashRouter` nên phù hợp với hosting tĩnh. Sau khi deploy, mở link công khai và tự kiểm tra cả trang danh sách lẫn trang chi tiết.

## Cấu trúc
- `src/components`: Header, thẻ thú cưng, biểu đồ.
- `src/pages`: trang danh sách và trang chi tiết.
- `src/data/pets.ts`: 40 hồ sơ thú cưng.
- `src/utils.ts`: 4 hàm tiện ích.
- `src/utils.test.ts`: 7 test theo mẫu đề bài.

## Lưu ý trung thực khi nộp
Dữ liệu thú cưng hiện là dữ liệu minh họa tự soạn cho bài tập, không phải danh sách nhận nuôi đã được xác minh ngoài đời. Cần tự tạo repository, thực hiện tối thiểu 14 commit trải đều trong 5 tiếng, deploy website, quay video demo và chụp ảnh kết quả kiểm tra theo yêu cầu giảng viên. Không sử dụng link hoặc ảnh kiểm tra giả.


## Ảnh thú cưng

Ảnh chó, mèo và thỏ trong giao diện được lấy từ Unsplash, hiển thị bằng ảnh trực tiếp và cần kết nối Internet. Ảnh được chọn theo đúng loài của từng hồ sơ mẫu. Nguồn ảnh tham khảo: [ảnh chó](https://unsplash.com/photos/a-dog-looking-at-the-camera-ycwymr_AKJw), [ảnh mèo](https://unsplash.com/photos/brown-and-white-tabby-cat-mBRfYA0dYYE), [ảnh mèo trắng-vàng](https://unsplash.com/photos/short-haired-white-and-brown-cat-G7kUPmzi80E), [ảnh thỏ nâu](https://unsplash.com/photos/a-brown-rabbit-sitting-on-top-of-a-black-surface-1Wx0-8ErrDE), [ảnh thỏ trắng-nâu](https://unsplash.com/fr/photos/lapin-blanc-et-brun-regardant-la-camera-T-V0104wuU0).

Lưu ý: thông tin tên, tuổi, địa điểm và phí hỗ trợ là dữ liệu minh họa cho bài thực hành, không phải tin nhận nuôi đã được xác minh.


## Dữ liệu thú cưng

Dự án có 40 hồ sơ mẫu gồm chó, mèo và thỏ. Mỗi hồ sơ dùng một URL ảnh Unsplash riêng, không lặp URL; phí hỗ trợ mẫu nằm trong khoảng 300.000–3.000.000₫. Đây là dữ liệu minh họa cho bài thực hành, không phải tin nhận nuôi đã được xác minh. Ảnh được tải trực tiếp từ Unsplash nên cần kết nối Internet.
