module ApplicationHelper
  def nl2br(text)
    text.gsub("\n", '<br />').html_safe
  end
end
