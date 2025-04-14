# create user
User.destroy_all
FactoryBot.create(:user, email:"admin@example.com", password: "password1234", confirmed_at: Time.now)

# create cagegories
Category.destroy_all

categories = [
  "العقائد",
  "الألوهية والربوبية",
  "الأسماء والصفات",
  "مذاهب وفرق",
  "الإسلام والإيمان",
  "الشفاعة والبدع",
  "الشرك والكفر",
  "فضائل العبادة",
  "القدر",
  "صفات المنافقين"
]
categories.each do |category|
  Category.create(name: category)
end