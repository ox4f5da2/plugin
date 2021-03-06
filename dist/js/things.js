// 物品
const things = {
  "teapot": "🫖",
  "tea": "🍵",
  "sake": "🍶",
  "champagne": "🍾",
  "wine_glass": "🍷",
  "cocktail": "🍸",
  "tropical_drink": "🍹",
  "beer": "🍺",
  "beers": "🍻",
  "clinking_glasses": "🥂",
  "tumbler_glass": "🥃",
  "cup_with_straw": "🥤",
  "bubble_tea": "🧋",
  "beverage_box": "🧃",
  "mate": "🧉",
  "ice_cube": "🧊",
  "chopsticks": "🥢",
  "plate_with_cutlery": "🍽️",
  "fork_and_knife": "🍴",
  "spoon": "🥄",
  "hocho": "🔪",
  "knife": "🔪",
  "amphora": "🏺",
  "earth_africa": "🌍",
  "earth_americas": "🌎",
  "earth_asia": "🌏",
  "world_map": "🗺️",
  "japan": "🗾",
  "compass": "🧭",
  "national_park": "🏞️",
  "foggy": "🌁",
  "night_with_stars": "🌃",
  "cityscape": "🏙️",
  "sunrise_over_mountains": "🌄",
  "sunrise": "🌅",
  "city_sunset": "🌆",
  "city_sunrise": "🌇",
  "bridge_at_night": "🌉",
  "bellhop_bell": "🛎️",
  "luggage": "🧳",  
  "comet": "☄️",
  "jack_o_lantern": "🎃",
  "christmas_tree": "🎄",
  "fireworks": "🎆",
  "sparkler": "🎇",
  "firecracker": "🧨",
  "sparkles": "✨",
  "balloon": "🎈",
  "tada": "🎉",
  "confetti_ball": "🎊",
  "tanabata_tree": "🎋",
  "bamboo": "🎍",
  "dolls": "🎎",
  "flags": "🎏",
  "wind_chime": "🎐",
  "rice_scene": "🎑",
  "red_envelope": "🧧",
  "ribbon": "🎀",
  "gift": "🎁",
  "reminder_ribbon": "🎗️",
  "tickets": "🎟️",
  "ticket": "🎫",
  "medal_military": "🎖️",
  "trophy": "🏆",
  "medal_sports": "🏅",
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  "soccer": "⚽",
  "baseball": "⚾",
  "softball": "🥎",
  "basketball": "🏀",
  "volleyball": "🏐",
  "football": "🏈",
  "rugby_football": "🏉",
  "tennis": "🎾",
  "flying_disc": "🥏",
  "bowling": "🎳",
  "cricket_game": "🏏",
  "field_hockey": "🏑",
  "ice_hockey": "🏒",
  "lacrosse": "🥍",
  "ping_pong": "🏓",
  "badminton": "🏸",
  "boxing_glove": "🥊",
  "goal_net": "🥅",
  "golf": "⛳",
  "sled": "🛷",
  "curling_stone": "🥌",
  "dart": "🎯",
  "yo_yo": "🪀",
  "kite": "🪁",
  "8ball": "🎱",
  "crystal_ball": "🔮",
  "magic_wand": "🪄",
  "nazar_amulet": "🧿",
  "video_game": "🎮",
  "joystick": "🕹️",
  "slot_machine": "🎰",
  "game_die": "🎲",
  "jigsaw": "🧩",
  "teddy_bear": "🧸",
  "pinata": "🪅",
  "nesting_dolls": "🪆",
  "black_joker": "🃏",
  "mahjong": "🀄",
  "flower_playing_cards": "🎴",
  "performing_arts": "🎭",
  "framed_picture": "🖼️",
  "art": "🎨",
  "thread": "🧵",
  "sewing_needle": "🪡",
  "yarn": "🧶",
  "knot": "🪢",
  "mute": "🔇",
  "speaker": "🔈",
  "sound": "🔉",
  "loud_sound": "🔊",
  "loudspeaker": "📢",
  "mega": "📣",
  "postal_horn": "📯",
  "bell": "🔔",
  "no_bell": "🔕",
  "musical_score": "🎼",
  "musical_note": "🎵",
  "notes": "🎶",
  "studio_microphone": "🎙️",
  "level_slider": "🎚️",
  "control_knobs": "🎛️",
  "microphone": "🎤",
  "headphones": "🎧",
  "radio": "📻",
  "saxophone": "🎷",
  "accordion": "🪗",
  "guitar": "🎸",
  "musical_keyboard": "🎹",
  "trumpet": "🎺",
  "violin": "🎻",
  "banjo": "🪕",
  "drum": "🥁",
  "long_drum": "🪘",
  "iphone": "📱",
  "calling": "📲",
  "telephone_receiver": "📞",
  "pager": "📟",
  "fax": "📠",
  "battery": "🔋",
  "electric_plug": "🔌",
  "computer": "💻",
  "desktop_computer": "🖥️",
  "printer": "🖨️",
  "keyboard": "⌨️",
  "computer_mouse": "🖱️",
  "trackball": "🖲️",
  "minidisc": "💽",
  "floppy_disk": "💾",
  "cd": "💿",
  "dvd": "📀",
  "abacus": "🧮",
  "movie_camera": "🎥",
  "film_strip": "🎞️",
  "film_projector": "📽️",
  "clapper": "🎬",
  "tv": "📺",
  "camera": "📷",
  "camera_flash": "📸",
  "video_camera": "📹",
  "vhs": "📼",
  "mag": "🔍",
  "mag_right": "🔎",
  "candle": "🕯️",
  "bulb": "💡",
  "flashlight": "🔦",
  "izakaya_lantern": "🏮",
  "lantern": "🏮",
  "diya_lamp": "🪔",
  "notebook_with_decorative_cover": "📔",
  "closed_book": "📕",
  "book": "📖",
  "open_book": "📖",
  "green_book": "📗",
  "blue_book": "📘",
  "orange_book": "📙",
  "books": "📚",
  "notebook": "📓",
  "ledger": "📒",
  "page_with_curl": "📃",
  "scroll": "📜",
  "page_facing_up": "📄",
  "newspaper": "📰",
  "newspaper_roll": "🗞️",
  "bookmark_tabs": "📑",
  "bookmark": "🔖",
  "label": "🏷️",
  "coin": "🪙",
  "yen": "💴",
  "dollar": "💵",
  "euro": "💶",
  "pound": "💷",
  "money_with_wings": "💸",
  "credit_card": "💳",
  "receipt": "🧾",
  "package": "📦",
  "mailbox": "📫",
  "mailbox_closed": "📪",
  "mailbox_with_mail": "📬",
  "mailbox_with_no_mail": "📭",
  "postbox": "📮",
  "ballot_box": "🗳️",
  "fountain_pen": "🖋️",
  "pen": "🖊️",
  "paintbrush": "🖌️",
  "crayon": "🖍️",
  "memo": "📝",
  "pencil": "📝",
  "briefcase": "💼",
  "file_folder": "📁",
  "open_file_folder": "📂",
  "card_index_dividers": "🗂️",
  "calendar": "📆",
  "spiral_notepad": "🗒️",
  "spiral_calendar": "🗓️",
  "card_index": "📇",
  "clipboard": "📋",
  "pushpin": "📌",
  "round_pushpin": "📍",
  "paperclip": "📎",
  "paperclips": "🖇️",
  "straight_ruler": "📏",
  "triangular_ruler": "📐",
  "scissors": "✂️",
  "card_file_box": "🗃️",
  "file_cabinet": "🗄️",
  "wastebasket": "🗑️",
  "lock": "🔒",
  "unlock": "🔓",
  "lock_with_ink_pen": "🔏",
  "closed_lock_with_key": "🔐",
  "key": "🔑",
  "old_key": "🗝️",
  "hammer": "🔨",
  "axe": "🪓",
  "pick": "⛏️",
  "hammer_and_pick": "⚒️",
  "hammer_and_wrench": "🛠️",
  "dagger": "🗡️",
  "crossed_swords": "⚔️",
  "gun": "🔫",
  "boomerang": "🪃",
  "bow_and_arrow": "🏹",
  "shield": "🛡️",
  "carpentry_saw": "🪚",
  "wrench": "🔧",
  "screwdriver": "🪛",
  "nut_and_bolt": "🔩",
  "gear": "⚙️",
  "clamp": "🗜️",
  "balance_scale": "⚖️",
  "probing_cane": "🦯",
  "link": "🔗",
  "chains": "⛓️",
  "hook": "🪝",
  "toolbox": "🧰",
  "magnet": "🧲",
  "ladder": "🪜",
  "alembic": "⚗️",
  "test_tube": "🧪",
  "petri_dish": "🧫",
  "dna": "🧬",
  "microscope": "🔬",
  "telescope": "🔭",
  "satellite": "📡",
  "syringe": "💉",
  "pill": "💊",
  "adhesive_bandage": "🩹",
  "stethoscope": "🩺",
  "door": "🚪",
  "elevator": "🛗",
  "mirror": "🪞",
  "window": "🪟",
  "bed": "🛏️",
  "couch_and_lamp": "🛋️",
  "chair": "🪑",
  "toilet": "🚽",
  "plunger": "🪠",
  "shower": "🚿",
  "bathtub": "🛁",
  "mouse_trap": "🪤",
  "razor": "🪒",
  "lotion_bottle": "🧴",
  "safety_pin": "🧷",
  "broom": "🧹",
  "basket": "🧺",
  "roll_of_paper": "🧻",
  "bucket": "🪣",
  "soap": "🧼",
  "toothbrush": "🪥",
  "sponge": "🧽",
  "fire_extinguisher": "🧯",
  "shopping_cart": "🛒",
  "smoking": "🚬",
  "headstone": "🪦",
  "moyai": "🗿",
  "placard": "🪧"
}

export default things;