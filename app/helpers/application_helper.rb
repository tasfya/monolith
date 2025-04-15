module ApplicationHelper

  def current_year_in_hijri_and_gregorian
    "#{Time.current.year} م / #{(Time.current.year - 579).to_s} هـ"
  end
end
