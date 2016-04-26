# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  initialView:
    id: "user"
    location: "meety#user"

  tabs: [
    {
      title: "Request"
      id: "request"
      location: "meety#request" # Supersonic module#view type navigation
    }
    {
      title: "Meeting"
      id: "meeting"
      location: "meety#meeting"
    }
    {
      title: "Settings"
      id: "settings"
      location: "meety#settings"
    }
  ]