# create user
User.destroy_all
FactoryBot.create(:user, email:"admin@example.com", password: "password1234", confirmed_at: Time.now)

# Create categories
categories = [
  { name: "الدروس العلمية", description: "الدروس العلمية المتنوعة", position: 1 },
  { name: "الخطب", description: "خطب الجمعة وغيرها", position: 2 },
  { name: "المحاضرات", description: "المحاضرات العلمية المتنوعة", position: 3 },
  { name: "الفوائد", description: "فوائد علمية متنوعة", position: 4 }
]

categories.each do |category_data|
  Category.find_or_create_by!(name: category_data[:name]) do |category|
    category.description = category_data[:description]
    category.position = category_data[:position]
  end
end

# Create fatwas
fatwa_data = [
  { title: "حكمة خلق الله الكافر مع علمه سبحانه أنه من أهل النار", content: "محتوى الفتوى...", author: "الشيخ عبد الله" },
  { title: "ماذا على من قال \" علي الحرام ما أفعل كذا \"", content: "محتوى الفتوى...", author: "الشيخ عبد الرحمن" },
  { title: "اقتصاص الكافر يوم القيامة من المسلم الذي ظلمه", content: "محتوى الفتوى...", author: "الشيخ محمد" }
]

fatwa_data.each do |data|
  Fatwa.find_or_create_by!(title: data[:title]) do |fatwa|
    fatwa.content = data[:content]
    fatwa.author = data[:author]
  end
end

lessons_category = Category.find_by(name: "الدروس العلمية")
sermons_category = Category.find_by(name: "الخطب")
lectures_category = Category.find_by(name: "المحاضرات")
benefits_category = Category.find_by(name: "الفوائد")

Fatwa.find_by(title: "حكمة خلق الله الكافر مع علمه سبحانه أنه من أهل النار").add_to_category(sermons_category)
Fatwa.find_by(title: "ماذا على من قال \" علي الحرام ما أفعل كذا \"").add_to_category(sermons_category)
Fatwa.find_by(title: "اقتصاص الكافر يوم القيامة من المسلم الذي ظلمه").add_to_category(lessons_category)