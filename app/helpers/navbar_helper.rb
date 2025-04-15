module NavbarHelper
    def navbar_links
      [
        {
          type: :dropdown,
          title: "تصنيفات",
          items: [
            { text: "التصنيف الأول", path: "#" },
            { text: "التصنيف الثاني", path: "#" },
            { text: "التصنيف الثالث", path: "#" },
            { text: "التصنيف الرابع", path: "#" }
          ]
        },
        {
          type: :dropdown,
          title: "مع الشيخ",
          items: [
            { text: "السيرة الذاتية", path: root_path },
            { text: "المقابلات", path: "#" },
            { text: "الأنشطة", path: "#" }
          ]
        },
        { type: :link, text: "فوائد", path: "#" },
        { type: :link, text: "كتب", path: "#" },
        { type: :link, text: "محاضرات", path: "#" },
        { type: :link, text: "خطب", path: "#" },
        { type: :link, text: "فتاوى", path: "#" },
        { type: :link, text: "الرئيسية", path: root_path }
      ]
    end

    def social_links
      [
        { icon: "facebook", path: "#" },
        { icon: "twitter", path: "#" },
        { icon: "whatsapp", path: "#" },
        { icon: "youtube", path: "#" }
      ]
    end

    def nav_render_social_links
      content_tag :div, class: "flex space-x-4 rtl" do
      social_links.each do |link|
        concat(
        link_to(
          inline_svg_tag("icons/#{link[:icon]}.svg", class: "h-6 w-6 text-amber-500 hover:text-amber-700"),
          link[:path],
          class: "text-amber-500 hover:text-amber-700 transition-colors duration-200"
        )
        )
      end
      end
    end
  
    def nav_link(text, path, options = {})
      link_to text, path, options.merge(class: class_names(
        "py-3 px-2 text-amber-900 hover:text-amber-600 border-b-2 border-transparent hover:border-amber-500 transition-all",
        options[:class]
      ))
    end
  
    def mobile_nav_link(text, path, options = {})
      link_to text, path, options.merge(class: class_names(
        "block py-2 px-3 text-amber-900 hover:bg-amber-100 rounded-md",
        options[:class]
      ))
    end
  
    def nav_dropdown(title, items, options = {})
      content_tag :div, class: "relative", data: { controller: "dropdown" } do
        concat(
          button_tag(
            class: "py-3 px-2 text-amber-900 hover:text-amber-600 border-b-2 border-transparent hover:border-amber-500 transition-all flex items-center",
            data: { dropdown_target: "toggle", action: "dropdown#toggle" }
          ) do
            concat(
              content_tag(:svg, class: "h-4 w-4 mr-1", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor") do
                content_tag(:path, nil, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M19 9l-7 7-7-7")
              end
            )
            concat title
          end
        )
        concat(
          content_tag(:div, class: "hidden absolute right-0 mt-1 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10 rtl transition-all duration-150 opacity-0 scale-95", data: { dropdown_target: "content" }) do
            content_tag(:div, class: "py-1") do
              items.each do |item|
                concat link_to item[:text], item[:path], class: "block px-4 py-2 text-sm text-gray-700 hover:bg-amber-100"
              end
            end
          end
        )
      end
    end
  
    def mobile_nav_dropdown(title, items, options = {})
      content_tag :div, class: "w-full", data: { controller: "dropdown" } do
        concat(
          button_tag(
            class: "w-full flex justify-between items-center py-2 px-3 text-amber-900 hover:bg-amber-100 rounded-md",
            data: { dropdown_target: "toggle", action: "dropdown#toggle" }
          ) do
            concat content_tag(:span, title)
            concat(
              content_tag(:svg, class: "h-4 w-4", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor") do
                content_tag(:path, nil, "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", d: "M19 9l-7 7-7-7")
              end
            )
          end
        )
        concat(
          content_tag(:div, class: "hidden mt-1 pl-4 border-r-2 border-amber-200 mr-2 transition-all duration-150 opacity-0 scale-95", data: { dropdown_target: "content" }) do
            items.each do |item|
              concat mobile_nav_link(item[:text], item[:path])
            end
          end
        )
      end
    end
  
    def render_nav_links
      content_tag :nav, class: "flex justify-center space-x-8 rtl" do
        navbar_links.each do |link|
          if link[:type] == :dropdown
            concat nav_dropdown(link[:title], link[:items])
          else
            concat nav_link(link[:text], link[:path])
          end
        end
      end
    end
  
    def render_mobile_nav_links
      content_tag :div, class: "px-2 pt-2 pb-3 space-y-1 sm:px-3 rtl" do
        navbar_links.reverse_each do |link| 
          if link[:type] == :dropdown
            concat mobile_nav_dropdown(link[:title], link[:items])
          else
            concat mobile_nav_link(link[:text], link[:path])
          end
        end
      end
    end
end
