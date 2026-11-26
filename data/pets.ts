import type { Pet } from '../types'

export const pets: Pet[] = [
  {
    id: 1, name: "Bông", type: "Chó",
    breed: "Poodle", age: "8 tháng", gender: "Cái",
    fee: 850000, postedDate: "2026-11-20", location: "Quận 1, TP.HCM",
    description: "Bông thân thiện, thích được vuốt ve và đi dạo. Bé đã quen sinh hoạt trong nhà.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1506499422601-ecc792cf898e?auto=format&fit=crop&w=1000&q=85", color: "#FDE7CF", status: "Đang tìm nhà"
  },
  {
    id: 2, name: "Đậu", type: "Chó",
    breed: "Chó ta lai", age: "5 tháng", gender: "Đực",
    fee: 300000, postedDate: "2026-11-19", location: "Bình Thạnh, TP.HCM",
    description: "Đậu năng động, ham học hỏi và rất quấn người. Bé cần không gian vui chơi.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1600804340584-c7db2eacf0bf?auto=format&fit=crop&w=1000&q=85", color: "#FCE8D9", status: "Đang tìm nhà"
  },
  {
    id: 3, name: "Na", type: "Chó",
    breed: "Corgi lai", age: "1 tuổi", gender: "Cái",
    fee: 1800000, postedDate: "2026-11-18", location: "Tân Bình, TP.HCM",
    description: "Na vui vẻ, thích chơi bóng và đã quen đi dạo bằng dây dắt.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1705351737726-d87f8395294c?auto=format&fit=crop&w=1000&q=85", color: "#FCE8D9", status: "Đang tìm nhà"
  },
  {
    id: 4, name: "Cốm", type: "Chó",
    breed: "Golden Retriever lai", age: "9 tháng", gender: "Cái",
    fee: 2500000, postedDate: "2026-11-17", location: "Phú Nhuận, TP.HCM",
    description: "Cốm thân thiện với mọi người, thích vận động và học những trò mới.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=1000&q=85", color: "#F8E9C9", status: "Đang tìm nhà"
  },
  {
    id: 5, name: "Tí Nị", type: "Chó",
    breed: "Chihuahua", age: "2 tuổi", gender: "Cái",
    fee: 1200000, postedDate: "2026-11-16", location: "Quận 10, TP.HCM",
    description: "Tí Nị nhỏ nhắn, tình cảm và thích nằm cạnh người thân.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1701532420814-2facb53cdd17?auto=format&fit=crop&w=1000&q=85", color: "#FCE8D9", status: "Đang tìm nhà"
  },
  {
    id: 6, name: "Mực", type: "Chó",
    breed: "Chó ta", age: "3 tuổi", gender: "Đực",
    fee: 300000, postedDate: "2026-11-15", location: "Hóc Môn, TP.HCM",
    description: "Mực trưởng thành, trung thành và đã quen với lịch sinh hoạt ổn định.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1657088746570-0218626e8f55?auto=format&fit=crop&w=1000&q=85", color: "#E8E8E8", status: "Đang tìm nhà"
  },
  {
    id: 7, name: "Lucky", type: "Chó",
    breed: "Beagle lai", age: "1 tuổi", gender: "Đực",
    fee: 1600000, postedDate: "2026-11-14", location: "Quận 11, TP.HCM",
    description: "Lucky tò mò, thích đánh hơi và phù hợp với người thích đi bộ.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85", color: "#F8E9C9", status: "Đang tìm nhà"
  },
  {
    id: 8, name: "Kem", type: "Chó",
    breed: "Pomeranian", age: "6 tháng", gender: "Cái",
    fee: 2800000, postedDate: "2026-11-13", location: "Quận 8, TP.HCM",
    description: "Kem hoạt bát, thích chơi đồ chơi và cần được chải lông định kỳ.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85", color: "#FCE8D9", status: "Đang tìm nhà"
  },
  {
    id: 9, name: "Su", type: "Chó",
    breed: "Chó ta", age: "7 tháng", gender: "Cái",
    fee: 500000, postedDate: "2026-11-12", location: "Bình Thạnh, TP.HCM",
    description: "Su lanh lợi, tình cảm và đang chờ một gia đình kiên nhẫn đồng hành.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1000&q=85", color: "#F8E9C9", status: "Đang tìm nhà"
  },
  {
    id: 10, name: "Bơ", type: "Chó",
    breed: "Shiba lai", age: "1 tuổi", gender: "Đực",
    fee: 3000000, postedDate: "2026-11-11", location: "Thủ Đức, TP.HCM",
    description: "Bơ vui tính, thích khám phá và cần được vận động mỗi ngày.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1000&q=85", color: "#F9E4C7", status: "Đang tìm nhà"
  },
  {
    id: 11, name: "Milo", type: "Chó",
    breed: "Labrador lai", age: "10 tháng", gender: "Đực",
    fee: 2200000, postedDate: "2026-11-10", location: "Quận 7, TP.HCM",
    description: "Milo hiền lành, thích chơi cùng người và học các lệnh cơ bản.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=85", color: "#F8E9C9", status: "Đang tìm nhà"
  },
  {
    id: 12, name: "Bánh Bao", type: "Chó",
    breed: "Pug", age: "2 tuổi", gender: "Cái",
    fee: 1900000, postedDate: "2026-11-09", location: "Gò Vấp, TP.HCM",
    description: "Bánh Bao điềm đạm, thích nằm nghỉ và được quan tâm nhẹ nhàng.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=85", color: "#FDE7CF", status: "Đang tìm nhà"
  },
  {
    id: 13, name: "Sóc", type: "Chó",
    breed: "Phốc sóc lai", age: "8 tháng", gender: "Đực",
    fee: 2700000, postedDate: "2026-11-08", location: "Tân Phú, TP.HCM",
    description: "Sóc lanh lợi, thân thiện và thích những buổi đi dạo ngắn.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=85", color: "#FCE8D9", status: "Đang tìm nhà"
  },
  {
    id: 14, name: "Bắp", type: "Chó",
    breed: "Cocker Spaniel", age: "1 tuổi", gender: "Đực",
    fee: 2300000, postedDate: "2026-11-07", location: "Quận 3, TP.HCM",
    description: "Bắp có tính cách dịu dàng, thích chơi đồ chơi và đi dạo.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=1000&q=85", color: "#F8E9C9", status: "Đang tìm nhà"
  },
  {
    id: 15, name: "Gấu", type: "Chó",
    breed: "Chó ta lông xù", age: "4 tháng", gender: "Đực",
    fee: 700000, postedDate: "2026-11-06", location: "Bình Tân, TP.HCM",
    description: "Gấu còn nhỏ, hiếu kỳ và cần gia đình kiên nhẫn hướng dẫn.", emoji: "🐕",
    imageUrl: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=1000&q=85", color: "#FDE7CF", status: "Đang tìm nhà"
  },
  {
    id: 16, name: "Teddy", type: "Chó",
    breed: "Poodle lai", age: "1 tuổi", gender: "Cái",
    fee: 2100000, postedDate: "2026-11-05", location: "Nhà Bè, TP.HCM",
    description: "Teddy quấn người, thích được chải lông và chơi trong nhà.", emoji: "🐶",
    imageUrl: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1000&q=85", color: "#FDE7CF", status: "Đang tìm nhà"
  },
  {
    id: 17, name: "Mây", type: "Mèo",
    breed: "Mèo tam thể", age: "10 tháng", gender: "Cái",
    fee: 600000, postedDate: "2026-11-20", location: "Gò Vấp, TP.HCM",
    description: "Mây nhẹ nhàng, thích nằm cạnh cửa sổ và chơi với đồ chơi nhỏ.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85", color: "#F8E3E8", status: "Đang tìm nhà"
  },
  {
    id: 18, name: "Mun", type: "Mèo",
    breed: "Mèo đen lông ngắn", age: "2 tuổi", gender: "Đực",
    fee: 300000, postedDate: "2026-11-19", location: "Quận 3, TP.HCM",
    description: "Mun điềm tĩnh, thích được quan tâm và hợp với gia đình ít ồn ào.", emoji: "🐈‍⬛",
    imageUrl: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85", color: "#E7E5F4", status: "Đang tìm nhà"
  },
  {
    id: 19, name: "Sữa", type: "Mèo",
    breed: "Mèo trắng", age: "7 tháng", gender: "Cái",
    fee: 900000, postedDate: "2026-11-18", location: "Bình Tân, TP.HCM",
    description: "Sữa đáng yêu, hiền và thích chơi cùng các thành viên trong nhà.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1000&q=85", color: "#F0F1F5", status: "Đang tìm nhà"
  },
  {
    id: 20, name: "Cam", type: "Mèo",
    breed: "Mèo mướp vàng", age: "1 tuổi", gender: "Đực",
    fee: 750000, postedDate: "2026-11-17", location: "Tân Phú, TP.HCM",
    description: "Cam hoạt bát, thích leo trèo và chơi cần câu mèo.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=85", color: "#F9E4C7", status: "Đang tìm nhà"
  },
  {
    id: 21, name: "Luna", type: "Mèo",
    breed: "Mèo Ba Tư lai", age: "1 tuổi", gender: "Cái",
    fee: 2600000, postedDate: "2026-11-16", location: "Quận 5, TP.HCM",
    description: "Luna thích không gian yên tĩnh và được chải lông thường xuyên.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=1000&q=85", color: "#EEE6FA", status: "Đang tìm nhà"
  },
  {
    id: 22, name: "Miu", type: "Mèo",
    breed: "Mèo mướp", age: "4 tuổi", gender: "Cái",
    fee: 500000, postedDate: "2026-11-15", location: "Thủ Đức, TP.HCM",
    description: "Miu trưởng thành, nhẹ nhàng và thích được nằm nghỉ bên cạnh chủ.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=85", color: "#E8E8E8", status: "Đang tìm nhà"
  },
  {
    id: 23, name: "Gạo", type: "Mèo",
    breed: "Mèo trắng vàng", age: "2 tuổi", gender: "Đực",
    fee: 650000, postedDate: "2026-11-14", location: "Củ Chi, TP.HCM",
    description: "Gạo thân thiện, đã quen sử dụng khay cát và thích được chơi cùng.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=1000&q=85", color: "#F7EBD8", status: "Đang tìm nhà"
  },
  {
    id: 24, name: "Mochi", type: "Mèo",
    breed: "Mèo Anh lông ngắn", age: "8 tháng", gender: "Cái",
    fee: 3000000, postedDate: "2026-11-13", location: "Quận 1, TP.HCM",
    description: "Mochi hiền, tò mò và thích nằm ở nơi có nắng ấm.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?auto=format&fit=crop&w=1000&q=85", color: "#E4EAFB", status: "Đang tìm nhà"
  },
  {
    id: 25, name: "Bông Tuyết", type: "Mèo",
    breed: "Mèo lông dài", age: "1 tuổi", gender: "Cái",
    fee: 1800000, postedDate: "2026-11-12", location: "Phú Nhuận, TP.HCM",
    description: "Bông Tuyết dịu dàng, thích được chải lông và chơi nhẹ nhàng.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1597626133663-53df9633b799?auto=format&fit=crop&w=1000&q=85", color: "#F0F1F5", status: "Đang tìm nhà"
  },
  {
    id: 26, name: "Tiêu", type: "Mèo",
    breed: "Mèo tuxedo", age: "6 tháng", gender: "Đực",
    fee: 800000, postedDate: "2026-11-11", location: "Quận 10, TP.HCM",
    description: "Tiêu tinh nghịch, thích khám phá và chơi cùng các bạn nhỏ.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1652564521843-0b4da636de85?auto=format&fit=crop&w=1000&q=85", color: "#E7E5F4", status: "Đang tìm nhà"
  },
  {
    id: 27, name: "Đốm", type: "Mèo",
    breed: "Mèo đốm", age: "9 tháng", gender: "Cái",
    fee: 950000, postedDate: "2026-11-10", location: "Bình Thạnh, TP.HCM",
    description: "Đốm thân thiện, dễ gần và thích những chiếc hộp giấy.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?auto=format&fit=crop&w=1000&q=85", color: "#F8E3E8", status: "Đang tìm nhà"
  },
  {
    id: 28, name: "Nếp", type: "Mèo",
    breed: "Mèo mướp xám", age: "2 tuổi", gender: "Đực",
    fee: 550000, postedDate: "2026-11-09", location: "Quận 4, TP.HCM",
    description: "Nếp khá trầm tính, thích quan sát và nằm cạnh cửa sổ.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1536589961747-e239b2abbec2?auto=format&fit=crop&w=1000&q=85", color: "#E8E8E8", status: "Đang tìm nhà"
  },
  {
    id: 29, name: "Mật", type: "Mèo",
    breed: "Mèo vàng", age: "5 tháng", gender: "Cái",
    fee: 1100000, postedDate: "2026-11-08", location: "Tân Bình, TP.HCM",
    description: "Mật hiếu động, thích đồ chơi lông vũ và được vuốt ve.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1000&q=85", color: "#F9E4C7", status: "Đang tìm nhà"
  },
  {
    id: 30, name: "Bí Ngô", type: "Mèo",
    breed: "Mèo cam", age: "1 tuổi", gender: "Đực",
    fee: 1300000, postedDate: "2026-11-07", location: "Quận 7, TP.HCM",
    description: "Bí Ngô thân thiện, thích chơi đùa và đã quen khay cát.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1000&q=85", color: "#FDE7CF", status: "Đang tìm nhà"
  },
  {
    id: 31, name: "Kẹo", type: "Mèo",
    breed: "Mèo lông ngắn", age: "7 tháng", gender: "Cái",
    fee: 1500000, postedDate: "2026-11-06", location: "Gò Vấp, TP.HCM",
    description: "Kẹo nhẹ nhàng, thích nằm cuộn tròn trên chiếc đệm mềm.", emoji: "🐱",
    imageUrl: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1000&q=85", color: "#F8E3E8", status: "Đang tìm nhà"
  },
  {
    id: 32, name: "Sushi", type: "Mèo",
    breed: "Mèo mướp", age: "3 tuổi", gender: "Đực",
    fee: 700000, postedDate: "2026-11-05", location: "Thủ Đức, TP.HCM",
    description: "Sushi đã trưởng thành, hiền và thích được chơi cùng mỗi ngày.", emoji: "🐈",
    imageUrl: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1000&q=85", color: "#E4EAFB", status: "Đang tìm nhà"
  },
  {
    id: 33, name: "Bắp", type: "Thỏ",
    breed: "Thỏ mini", age: "6 tháng", gender: "Đực",
    fee: 500000, postedDate: "2026-11-20", location: "Quận 7, TP.HCM",
    description: "Bắp hiền và tò mò. Bé cần nơi ở thoáng mát, yên tĩnh và được chăm sóc nhẹ nhàng.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1707389572540-3f6c5a7fde43?auto=format&fit=crop&w=1000&q=85", color: "#F4EBD8", status: "Đang tìm nhà"
  },
  {
    id: 34, name: "Sóc", type: "Thỏ",
    breed: "Thỏ tai cụp", age: "1 tuổi", gender: "Cái",
    fee: 850000, postedDate: "2026-11-19", location: "Nhà Bè, TP.HCM",
    description: "Sóc thích ăn rau xanh và cần một góc nghỉ ngơi sạch sẽ.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1535241556859-780cb9f395f2?auto=format&fit=crop&w=1000&q=85", color: "#F3E6D8", status: "Đang tìm nhà"
  },
  {
    id: 35, name: "Bơ", type: "Thỏ",
    breed: "Thỏ lông xù", age: "8 tháng", gender: "Đực",
    fee: 1200000, postedDate: "2026-11-18", location: "Bình Chánh, TP.HCM",
    description: "Bơ hiền lành, thích khám phá và cần chế độ ăn phù hợp cho thỏ.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1707389572374-824e52ea85d6?auto=format&fit=crop&w=1000&q=85", color: "#F0E5D5", status: "Đang tìm nhà"
  },
  {
    id: 36, name: "Mochi", type: "Thỏ",
    breed: "Thỏ trắng", age: "5 tháng", gender: "Cái",
    fee: 1500000, postedDate: "2026-11-17", location: "Quận 2, TP.HCM",
    description: "Mochi hiền, thích không gian yên tĩnh và được chăm sóc nhẹ nhàng.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?auto=format&fit=crop&w=1000&q=85", color: "#F4EBD8", status: "Đang tìm nhà"
  },
  {
    id: 37, name: "Cà Rốt", type: "Thỏ",
    breed: "Thỏ Hà Lan", age: "9 tháng", gender: "Đực",
    fee: 900000, postedDate: "2026-11-16", location: "Tân Phú, TP.HCM",
    description: "Cà Rốt tò mò, thích khám phá và cần chuồng rộng, sạch.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1591382386627-349b692688ff?auto=format&fit=crop&w=1000&q=85", color: "#F3E6D8", status: "Đang tìm nhà"
  },
  {
    id: 38, name: "Mơ", type: "Thỏ",
    breed: "Thỏ tai cụp", age: "1 tuổi", gender: "Cái",
    fee: 1800000, postedDate: "2026-11-15", location: "Quận 9, TP.HCM",
    description: "Mơ hiền, thích được vuốt ve nhẹ nhàng và có chỗ nghỉ riêng.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1591561582301-7ce6588ab4a8?auto=format&fit=crop&w=1000&q=85", color: "#F0E5D5", status: "Đang tìm nhà"
  },
  {
    id: 39, name: "Bánh Mì", type: "Thỏ",
    breed: "Thỏ nâu mini", age: "7 tháng", gender: "Đực",
    fee: 700000, postedDate: "2026-11-14", location: "Bình Tân, TP.HCM",
    description: "Bánh Mì thích gặm đồ chơi an toàn và ăn cỏ khô.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1570037508740-2a0b0bfc8c49?auto=format&fit=crop&w=1000&q=85", color: "#F4EBD8", status: "Đang tìm nhà"
  },
  {
    id: 40, name: "Tuyết", type: "Thỏ",
    breed: "Thỏ lông trắng", age: "10 tháng", gender: "Cái",
    fee: 2200000, postedDate: "2026-11-13", location: "Phú Nhuận, TP.HCM",
    description: "Tuyết nhẹ nhàng, cần nơi ở mát mẻ và được chăm sóc đều đặn.", emoji: "🐰",
    imageUrl: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=85", color: "#F0F1F5", status: "Đang tìm nhà"
  }
]
