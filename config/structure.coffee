# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Index"
      id: "index"
      location: "meety#getting-started" # Supersonic module#view type navigation
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

  # rootView:
  #   location: "meety#getting-started"

  preloads: [
    {
      id: "rsvp"
      location: "meety#rsvp"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "meety#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "meety#initial-view"
