# Create user
User.destroy_all
FactoryBot.create(:user, email: "admin@example.com", password: "password1234", confirmed_at: Time.now)

# Create categories
categories_data = [
  { name: "الدروس العلمية", description: "الدروس العلمية المتنوعة", position: 1 },
  { name: "الخطب", description: "خطب الجمعة وغيرها", position: 2 },
  { name: "المحاضرات", description: "المحاضرات العلمية المتنوعة", position: 3 },
  { name: "الفوائد", description: "فوائد علمية متنوعة", position: 4 }
]

categories_data.each do |category_data|
  Category.find_or_create_by!(name: category_data[:name]) do |category|
    category.update(category_data.except(:name))
  end
end

# Create fatwas
fatwas_data = [
  { title: "حكمة خلق الله الكافر مع علمه سبحانه أنه من أهل النار", content: "محتوى الفتوى...", author: "الشيخ عبد الله" },
  { title: "ماذا على من قال \" علي الحرام ما أفعل كذا \"", content: "محتوى الفتوى...", author: "الشيخ عبد الرحمن" },
  { title: "اقتصاص الكافر يوم القيامة من المسلم الذي ظلمه", content: "محتوى الفتوى...", author: "الشيخ محمد" },
  { title: "حكم التسمية بـ \"عبد النبي\"", content: "محتوى الفتوى...", author: "الشيخ أحمد" },
  { title: "حكم الاحتفال بالمولد النبوي", content: "محتوى الفتوى...", author: "الشيخ علي" },
  { title: "حكم الصلاة في المساجد التي فيها قبور", content: "محتوى الفتوى...", author: "الشيخ يوسف" },
  { title: "حكم زكاة الفطر", content: "محتوى الفتوى...", author: "الشيخ سعيد" },
  { title: "حكم صيام يوم الشك", content: "محتوى الفتوى...", author: "الشيخ عادل" },
  { title: "حكم التبرع بالأعضاء", content: "محتوى الفتوى...", author: "الشيخ فهد" },
  { title: "حكم استخدام وسائل منع الحمل", content: "محتوى الفتوى...", author: "الشيخ سامي" },
  { title: "حكم التداوي بالقرآن", content: "محتوى الفتوى...", author: "الشيخ وليد" },
  { title: "حكم الاحتفال بعيد الميلاد", content: "محتوى الفتوى...", author: "الشيخ عيسى" },
  { title: "حكم لبس الذهب للرجال", content: "محتوى الفتوى...", author: "الشيخ زيد" },
  { title: "حكم التصوير الفوتوغرافي", content: "محتوى الفتوى...", author: "الشيخ هاني" },
  { title: "حكم التبرع بالدم", content: "محتوى الفتوى...", author: "الشيخ طارق" },
  { title: "حكم صيام يوم عاشوراء", content: "محتوى الفتوى...", author: "الشيخ عزيز" }
]

fatwas_data.each do |fatwa_data|
  Fatwa.find_or_create_by!(title: fatwa_data[:title]) do |fatwa|
    fatwa.update(fatwa_data.except(:title))
  end
end

# Assign categories to fatwas
fatwa_category_assignments = {
  "حكمة خلق الله الكافر مع علمه سبحانه أنه من أهل النار" => ["الدروس العلمية"],
  "ماذا على من قال \" علي الحرام ما أفعل كذا \"" => ["الدروس العلمية"],
  "اقتصاص الكافر يوم القيامة من المسلم الذي ظلمه" => ["الدروس العلمية"],
  "حكم التسمية بـ \"عبد النبي\"" => ["الدروس العلمية"],
  "حكم الاحتفال بالمولد النبوي" => ["الدروس العلمية"],
  "حكم الصلاة في المساجد التي فيها قبور" => ["الدروس العلمية"],
  "حكم زكاة الفطر" => ["الدروس العلمية"],
  "حكم صيام يوم الشك" => ["الدروس العلمية"],
  "حكم التبرع بالأعضاء" => ["الدروس العلمية"],
  "حكم استخدام وسائل منع الحمل" => ["الدروس العلمية"],
  "حكم التداوي بالقرآن" => ["الدروس العلمية"],
  "حكم الاحتفال بعيد الميلاد" => ["الدروس العلمية"],
  "حكم لبس الذهب للرجال" => ["الدروس العلمية"],
  "حكم التصوير الفوتوغرافي" => ["الدروس العلمية"],
  "حكم التبرع بالدم" => ["الدروس العلمية"],
  "حكم صيام يوم عاشوراء" => ["الدروس العلمية"]
}

fatwa_category_assignments.each do |fatwa_title, category_names|
  fatwa = Fatwa.find_by(title: fatwa_title)
  category_names.each do |category_name|
    category = Category.find_by(name: category_name)
    fatwa.add_to_category(category) if fatwa && category
  end
end