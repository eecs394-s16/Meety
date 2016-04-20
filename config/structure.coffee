# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "User"
      id: "user"
      location: "meety#user"
    }
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
      title: "Team"
      id: "team"
      location: "meety#team"
    }
  ]