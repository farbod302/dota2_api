const ARTIFACTS = [
    {
        "item_name": "Arcane Blink",
        "item_gold": "6800",
        "item_image": "https://liquipedia.net/commons/images/thumb/a/a1/Arcane_Blink.png/85px-Arcane_Blink.png",
        "ability": {
            "item_info": "Teleport to a target point. After teleportation,you gain 30% Ability Cooldown Reduction and 50% Cast Point reduction for 6 seconds. If damage is taken from a player (heroes,units under their control,and self damage) or Roshan,overwhelming blink will be disabled for a 3 seconds.",
            "Blink_Distance": "1200",
            "Penalty_Distance": "960",
            "Disabled_Time_On_Hit": "3",
            "Radius": "800",
            "Cast_Time_Reduction": "50%",
            "Cooldown_Reduction": "30%",
            "cd": "15"
        },
        "creation": {
            "from": ["Blink Dagger",
                "Mystic Staff",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Diffusal Blade",
        "item_gold": "3150",
        "item_image": "https://liquipedia.net/commons/images/a/a4/Diffusal_Blade.png",
        "ability": {
            "item_info": "Inhibits a target unit,slowing its movement speed. Non-hero units will be rooted for the first few seconds and slowed for the last second.",
            "Movement_Speed_Slow": "100%",
            "Slow_Duration": "4",
            "Non-Hero_Root_Duration": "3",
            "Cast_Range": "600",
            "cd": "15"
        },
        "creation": {
            "from": ["Blade of Alacrity",
                "Blade of Alacrity",
                "Robe of the Magi",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Dragon Lance",
        "item_gold": "1900",
        "item_image": "https://liquipedia.net/commons/images/1/18/Dragon_Lance.png",
        "ability": {
            "item_info": "Increases the attack range of ranged heroes.",
            "Bonus_Attack_Range": "140"
        },
        "creation": {
            "from": ["Ogre Club",
                "Band of Elvenskin",
                "Band of Elvenskin"],
            "become": ["Hurricane Pike"]
        }
    },
    {
        "item_name": "Echo Sabre",
        "item_gold": "2500",
        "item_image": "https://liquipedia.net/commons/images/2/26/Echo_Sabre.png",
        "ability": {
            "item_info": "Causes melee attacks to strike twice in quick succession. These attacks apply a brief slow.",
            "Extra_Attacks": "1",
            "Bonus_Attack_Speed": "490",
            "Movement_Speed_Slow": "100%",
            "Slow_Duration": "0.8",
            "cd": "6"
        },
        "creation": {
            "from": ["Ogre Club",
                "Oblivion Staff"],
            "become": []
        }
    },
    {
        "item_name": "Eye of Skadi",
        "item_gold": "5300",
        "item_image": "https://liquipedia.net/commons/images/6/64/Eye_of_Skadi.png",
        "ability": {
            "item_info": "Will slow the movement speed and attack speed of the enemy target on attack.",
            "Slow_Duration": "3",
            "Movement_Speed_Slow_Versus_Melee": "25%",
            "Attack_Speed_Slow_Versus_Melee": "25%",
            "Movement_Speed_Slow_Versus_Ranged": "50%",
            "Attack_Speed_Slow_Versus_Ranged": "50%",
            "Heal,Regen_and_Lifesteal_Reduction": "40%"
        },
        "creation": {
            "from": ["Ultimate Orb",
                "Ultimate Orb",
                "Point Booster"],
            "become": []
        }
    },
    {
        "item_name": "Heaven's Halberd",
        "item_gold": "3550",
        "item_image": "https://liquipedia.net/commons/images/0/0a/Heavens_Halberd.png",
        "ability": {
            "item_info": "Disarms the target for a few seconds. Lasts a shorter duration on melee targets. A disarmed unit cannot attack,but may still cast spells.",
            "Ranged_Disarm_Duration": "5",
            "Melee_Disarm_Duration": "3",
            "Cast_Range": "600",
            "cd": "18",
            "mana": "100"
        },
        "creation": {
            "from": ["Sange",
                "Talisman of Evasion",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Kaya",
        "item_gold": "2050",
        "item_image": "https://liquipedia.net/commons/images/9/97/Kaya.png",
        "creation": {
            "from": ["Staff of Wizardry",
                "Robe of the Magi",
                "Recipe"],
            "become": ["Yasha and Kaya",
                "Bloodstone",
                "Kaya and Sange"]
        }
    },
    {
        "item_name": "Kaya and Sange",
        "item_gold": "4100",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/0e/Kaya_and_Sange.png/85px-Kaya_and_Sange.png",
        "creation": {
            "from": ["Sange",
                "Kaya"],
            "become": []
        }
    },
    {
        "item_name": "Maelstrom",
        "item_gold": "2700",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/14/Maelstrom.png/85px-Maelstrom.png",
        "ability": {
            "item_info": "Grants a chance to release Chain Lightning on attack,dealing damage to multiple targets.",
            "Lightning_Damage": "140",
            "Lightning_Chance": "30%",
            "Maximum_Bounces": "4",
            "Bounce_Radius": "650",
            "cd": "0.2"
        },
        "creation": {
            "from": ["Mithril Hammer",
                "Javelin"],
            "become": ["Gleipnir",
                "Mjollnir"]
        }
    },
    {
        "item_name": "Mage Slayer",
        "item_gold": "2400",
        "item_image": "https://liquipedia.net/commons/images/thumb/6/6a/Mage_Slayer.png/85px-Mage_Slayer.png",
        "ability": {
            "item_info": "Places a debuff when you attack enemies causing them to do less spell damage.",
            "Spell_Damage_Debuff": "35%",
            "Duration": "6"
        },
        "creation": {
            "from": ["Cloak",
                "Oblivion Staff",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Mjollnir",
        "item_gold": "5600",
        "item_image": "https://liquipedia.net/commons/images/b/b7/Mjollnir.png",
        "ability": {
            "item_info": "Places a charged shield on a target unit. When affected unit is attacked,there is a chance that lightning will strike the source of damage and other nearby enemies.",
            "Lightning_Damage": "200",
            "Lighting_Chance": "20%",
            "Charge_Duration": "15",
            "Maximum_Bounces": "5",
            "Bounce_Radius": "900",
            "Cast_Range": "800",
            "cd": "35",
            "mana": "50"
        },
        "creation": {
            "from": ["Hyperstone",
                "Maelstrom",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Overwhelming Blink",
        "item_gold": "6800",
        "item_image": "https://liquipedia.net/commons/images/thumb/5/53/Overwhelming_Blink.png/85px-Overwhelming_Blink.png",
        "ability": {
            "item_info": "Teleport to a target point. After teleportation,all enemies in a 800 AoE have 50% movement speed slow and 50 attack speed slow for 6 seconds,and take damage equal to 100 + 150% of your strength. If damage is taken from a player (heroes,units under their control,and self damage) or Roshan,overwhelming blink will be disabled for a 3 seconds.",
            "Blink_Distance": "1200",
            "Penalty_Distance": "960",
            "Disabled_Time_On_Hit": "3",
            "Radius": "800",
            "Base_Damage": "100",
            "Strength_as_Damage": "150%",
            "Move_Speed_Slow": "50%",
            "Attack_Speed_Slow": "50",
            "Slow_Duration": "6",
            "cd": "15"
        },
        "creation": {
            "from": ["Blink Dagger",
                "Reaver",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Sange",
        "item_gold": "2050",
        "item_image": "https://liquipedia.net/commons/images/c/ca/Sange.png",
        "creation": {
            "from": ["Ogre Club",
                "Belt of Strength",
                "Recipe"],
            "become": ["Heavens Halberd",
                "Sange and Yasha",
                "Kaya and Sange"]
        }
    },
    {
        "item_name": "Sange and Yasha",
        "item_gold": "4100",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/1c/Sange_and_Yasha.png/85px-Sange_and_Yasha.png",
        "creation": {
            "from": ["Yasha",
                "Sange"],
            "become": []
        }
    },
    {
        "item_name": "Satanic",
        "item_gold": "5050",
        "item_image": "https://liquipedia.net/commons/images/0/0e/Satanic.png",
        "ability": {
            "item_info": "Increases lifesteal for a short time,regenerating twice the damage dealt for each hit.",
            "Lifesteal": "200%",
            "Duration": "6",
            "cd": "25"
        },
        "creation": {
            "from": ["Morbid Mask",
                "Claymore",
                "Reaver"],
            "become": []
        }
    },
    {
        "item_name": "Swift Blink",
        "item_gold": "6800",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/0e/Swift_Blink.png/85px-Swift_Blink.png",
        "ability": {
            "item_info": "Teleport to a target point. After teleportation,you gain 40% phased movement speed,+45 Attack Speed,and +50 Attack Damage for 6 seconds. If damage is taken from a player (heroes,units under their control,and self damage) or Roshan,overwhelming blink will be disabled for a 3 seconds.",
            "Blink_Distance": "1200",
            "Penalty_Distance": "960",
            "Disabled_Time_On_Hit": "3",
            "Attack_Damage_Bonus": "45",
            "Attack_Speed_Bonus": "45",
            "Move_Speed_Bonus": "40%",
            "Duration": "6",
            "cd": "15"
        },
        "creation": {
            "from": ["Blink Dagger",
                "Eaglesong",
                "Recipe"],
            "become": []
        }
    },
    {
        "item_name": "Yasha",
        "item_gold": "2050",
        "item_image": "https://liquipedia.net/commons/images/e/e8/Yasha.png",
        "creation": {
            "from": ["Blade of Alacrity",
                "Band of Elvenskin",
                "Recipe"],
            "become": ["Manta Style",
                "Sange and Yasha",
                "Yasha and Kaya"]
        }
    },
    {
        "item_name": "Yasha and Kaya",
        "item_gold": "4100",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/00/Yasha_and_Kaya.png/85px-Yasha_and_Kaya.png",
        "creation": {
            "from": ["Kaya",
                "Yasha"],
            "become": []
        }
    }]

const WEAPONS = [
    {
        "item_name": "Abyssal Blade",
        "item_gold": "6325",
        "item_image": "https://liquipedia.net/commons/images/7/70/Abyssal_Blade.png",
        "ability": {
            "item_info": "Overwhelm allows the user to perform a blink strike to stun a target enemy.",
            "Stun_Duration": "2",
            "Cast_Range": "550",
            "cd": "35",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Skull Basher",
                "Vanguard",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Armlet of Mordiggian",
        "item_gold": "2475",
        "item_image": "https://liquipedia.net/commons/images/a/a2/Armlet_of_Mordiggian.png",
        "ability": {
            "item_info": "Gives bonuses while toggled on, but drains the user's HP per second.",
            "Bonus_Damage": "35",
            "Bonus_Strength": "25",
            "Bonus_Armor": "4",
            "HP_Cost_Per_Second": "40"
        },
        "creation": {
            "from": [
                "Helm of Iron Will",
                "Gloves of Haste",
                "Blades of Attack",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Battle Fury",
        "item_gold": "4130",
        "item_image": "https://liquipedia.net/commons/images/a/a5/Battle_Fury.png",
        "ability": {
            "item_info": "Cuts down the target tree.",
            "Tree_Cast_Range": "350",
            "cd": "4"
        },
        "creation": {
            "from": [
                "Broadsword",
                "Claymore",
                "Perseverance",
                "Quelling Blade"
            ],
            "become": []
        }
    },
    {
        "item_name": "Bloodthorn",
        "item_gold": "6475",
        "item_image": "https://liquipedia.net/commons/images/3/38/Bloodthorn.png",
        "ability": {
            "item_info": "All attacks on the silenced target, including from allies, gain accuracy and critical hits.",
            "Critical_Damage": "130%",
            "Accuracy": "100%",
            "Silence_Duration": "5",
            "End_Damage_Dealt": "30%",
            "Cast_Range": "900",
            "cd": "15",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Orchid Malevolence",
                "Hyperstone",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Butterfly",
        "item_gold": "5275",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/10/Butterfly.png/85px-Butterfly.png",
        "creation": {
            "from": [
                "Talisman of Evasion",
                "Quarterstaff",
                "Eaglesong"
            ],
            "become": []
        }
    },
    {
        "item_name": "Crystalys",
        "item_gold": "1950",
        "item_image": "https://liquipedia.net/commons/images/c/c6/Crystalys.png",
        "ability": {
            "item_info": "Gives a chance to deal a bonus damage critical strike.",
            "Critical_Chance": "30%",
            "Critical_Damage": "160%"
        },
        "creation": {
            "from": [
                "Broadsword",
                "Blades of Attack",
                "Recipe"
            ],
            "become": [
                "Daedalus",
                "Silver Edge"
            ]
        }
    },
    {
        "item_name": "Daedalus",
        "item_gold": "5150",
        "item_image": "https://liquipedia.net/commons/images/thumb/3/39/Daedalus.png/85px-Daedalus.png",
        "ability": {
            "item_info": "Gives a chance to deal a bonus damage critical strike.",
            "Critical_Chance": "30%",
            "Critical_Damage": "225%"
        },
        "creation": {
            "from": [
                "Crystalys",
                "Demon Edge",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Desolator",
        "item_gold": "3500",
        "item_image": "https://liquipedia.net/commons/images/thumb/e/e2/Desolator.png/85px-Desolator.png",
        "ability": {
            "item_info": "Your attacks reduce enemy armor.",
            "Armor_Reduction": "6",
            "Duration": "7"
        },
        "creation": {
            "from": [
                "Mithril Hammer",
                "Mithril Hammer",
                "Blight Stone"
            ],
            "become": []
        }
    },
    {
        "item_name": "Divine Rapier",
        "item_gold": "6000",
        "item_image": "https://liquipedia.net/commons/images/1/1d/Divine_Rapier.png",
        "ability": {
            "item_info": "Drops on death and cannot be destroyed.\nOriginal Rapier\nThe initial state when bought. If the Original Rapier is picked up by an ally, it will be muted until it is returned to the original owner.\nFree Rapier\nIf an enemy hero picks up the Divine Rapier, it permanently becomes the Free Rapier. It will not be muted for allies, and cannot be manually returned to the owner."
        },
        "creation": {
            "from": [
                "Sacred Relic",
                "Demon Edge"
            ],
            "become": []
        }
    },
    {
        "item_name": "Ethereal Blade",
        "item_gold": "4500",
        "item_image": "https://liquipedia.net/commons/images/c/c9/Ethereal_Blade.png",
        "ability": {
            "item_info": "Converts your target into ethereal form. Target unit is slowed and cannot attack or be attacked. Takes a multiplier of your primary attribute and deals it as bonus damage. Ethereal units take extra magic damage.",
            "Base_Damage": "125",
            "Primary_Attribute_Bonus_Damage": "150%",
            "Enemy_Movement_Slow": "80%",
            "Magic_Amplification": "40%",
            "Duration": "4",
            "Cast_Range": "800",
            "cd": "20",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Eaglesong",
                "Ghost Scepter"
            ],
            "become": []
        }
    },
    {
        "item_name": "Meteor Hammer",
        "item_gold": "2300",
        "item_image": "https://liquipedia.net/commons/images/a/a4/Meteor_Hammer.png",
        "ability": {
            "item_info": "After a successful channel, summons a meteor that strikes an area, damaging and stunning enemies. Deals damage over time to enemy units and buildings.",
            "Impact_Damage": "150",
            "Damage_Per_Second": "90",
            "Building_Impact_Damage": "75",
            "Building_Damage_Per_Second": "60",
            "Damage_Duration": "6",
            "Stun_Duration": "1.5",
            "Radius": "315",
            "Impact_Delay": "0.5",
            "Channel_Duration": "2.5",
            "Cast_Range": "600",
            "cd": "24",
            "mana": "125"
        },
        "creation": {
            "from": [
                "Perseverance",
                "Crown",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Monkey King Bar",
        "item_gold": "4975",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/0a/Monkey_King_Bar.png/85px-Monkey_King_Bar.png",
        "ability": {
            "item_info": "Monkey King Bar has a chance to pierce through evasion and deal bonus damage.",
            "Accuracy_Chance": "75%",
            "Bonus_Damage": "70"
        },
        "creation": {
            "from": [
                "Demon Edge",
                "Javelin",
                "Blitz Knuckles",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Nullifier",
        "item_gold": "4725",
        "item_image": "https://liquipedia.net/commons/images/4/41/Nullifier.png",
        "ability": {
            "item_info": "Dispels the target. Anytime the dispelled target is attacked, it will be slowed.",
            "Duration": "5",
            "Movement_Speed_Slow": "80%",
            "Slow_Duration": "0.5",
            "Cast_Range": "900",
            "cd": "11",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Sacred Relic",
                "Helm of Iron Will"
            ],
            "become": []
        }
    },
    {
        "item_name": "Radiance",
        "item_gold": "5150",
        "item_image": "https://liquipedia.net/commons/images/7/71/Radiance.png",
        "ability": {
            "item_info": "Deals damage per second in a radius around the holder and gives enemies a small miss chance. Can be toggled on and off.",
            "Damage_Per_Second": "60",
            "Illusion_DPS": "35",
            "Miss_Chance": "17%",
            "Radius": "700"
        },
        "creation": {
            "from": [
                "Sacred Relic",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Shadow Blade",
        "item_gold": "3000",
        "item_image": "https://liquipedia.net/commons/images/4/4a/Shadow_Blade.png",
        "ability": {
            "item_info": "Makes you invisible until the duration ends, or until you attack or cast a spell. While Shadow Walk is active, you move faster and can move through units. If attacking to break the invisibility, you gain bonus damage on that attack.",
            "Bonus_Damage": "175",
            "Bonus_Movement_Speed": "20%",
            "Fade_Time": "0.3",
            "Duration": "14",
            "cd": "28",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Shadow Amulet",
                "Blitz Knuckles",
                "Broadsword"
            ],
            "become": [
                "Silver Edge"
            ]
        }
    },
    {
        "item_name": "Silver Edge",
        "item_gold": "5450",
        "item_image": "https://liquipedia.net/commons/images/thumb/4/4a/Silver_Edge.png/85px-Silver_Edge.png",
        "ability": {
            "item_info": "Makes you invisible until the duration ends, or until you attack or cast a spell. While Shadow Walk is active, you move faster and can pass through units. Attacking to end the invisibility will deal bonus physical damage and a guaranteed critical damage, also break the target, disabling its passive abilities. Attacking to end invisibility cannot miss.",
            "Bonus_Damage": "175",
            "Bonus_Movement_Speed": "25%",
            "Fade_Time": "0.3",
            "Invisibility_Duration": "14",
            "Break_Duration": "4",
            "Critical_Damage": "160%",
            "Critical_Damage_Chance": "30%",
            "cd": "20",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Shadow Blade",
                "Crystalys",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Skull Basher",
        "item_gold": "2875",
        "item_image": "https://liquipedia.net/commons/images/0/06/Skull_Basher.png",
        "ability": {
            "item_info": "Gives a chance to stun the target and deal bonus damage on attack. Chance is dependent on whether it is used by a melee or ranged hero.",
            "Melee_Bash_Chance": "25%",
            "Ranged_Bash_Chance": "10%",
            "Bash_Damage": "100",
            "Bash_Duration": "1.5",
            "cd": "2.3"
        },
        "creation": {
            "from": [
                "Belt of Strength",
                "Mithril Hammer",
                "Recipe"
            ],
            "become": [
                "Abyssal Blade"
            ]
        }
    }
]

const ARMOR = [
    {
        "item_name": "Aeon Disk",
        "item_gold": "3000",
        "item_image": "https://liquipedia.net/commons/images/0/0a/Aeon_Disk.png",
        "ability": {
            "item_info": "When the user's health falls below the threshold, a strong dispel is applied and a buff is gained for a few seconds. Causes all incoming and outgoing damage to be reduced to zero. Status resistance is also gained, reducing the duration of debuffs. The passive only triggers on player-based damage. Cooldown increases with each usage.",
            "Health_Threshold": "70%",
            "Damage_Resistance/Reduction": "100%",
            "Status_Resistance": "75%",
            "Duration": "2.5",
            "cd": "105/125/145/165"
        },
        "creation": {
            "from": [
                "Vitality Booster",
                "Energy Booster",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Assault Cuirass",
        "item_gold": "5125",
        "item_image": "https://liquipedia.net/commons/images/4/40/Assault_Cuirass.png",
        "ability": {
            "item_info": "Grants increased attack speed and armor to nearby allied units and buildings, decreases armor on nearby enemies.",
            "Bonus_Attack_Speed": "30",
            "Bonus_Armor": "5",
            "Armor_Reduction": "5",
            "Radius": "1200"
        },
        "creation": {
            "from": [
                "Platemail",
                "Hyperstone",
                "Buckler",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Black King Bar",
        "item_gold": "4050",
        "item_image": "https://liquipedia.net/commons/images/8/85/Black_King_Bar.png",
        "ability": {
            "item_info": "Grants Spell Immunity. Duration decreases with each use. Some abilities are able to pierce through Spell Immunity.",
            "Spell_Immunity_Duration": "9 / 8 / 7 / 6",
            "cd": "75"
        },
        "creation": {
            "from": [
                "Ogre Club",
                "Mithril Hammer",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Blade Mail",
        "item_gold": "2225",
        "item_image": "https://liquipedia.net/commons/images/4/47/Blade_Mail.png",
        "ability": {
            "item_info": "Passively returns attack damage back to the enemies. Returns any damage taken back to the enemies that dealt the damage.",
            "Passive_Attack_Damage_Returned": "20 + 20%",
            "Damage_Returned": "80%",
            "Duration": "4.5",
            "cd": "25",
            "mana": "25"
        },
        "creation": {
            "from": [
                "Broadsword",
                "Chainmail",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Bloodstone",
        "item_gold": "5950",
        "item_image": "https://liquipedia.net/commons/images/0/00/Bloodstone.png",
        "ability": {
            "item_info": "Converts your current mana to health regeneration over time.",
            "Heal_Duration": "2",
            "cd": "85",
            "mana": "30% of max mana"
        },
        "creation": {
            "from": [
                "Kaya",
                "Soul Booster",
                "Voodoo Mask"
            ],
            "become": []
        }
    },
    {
        "item_name": "Crimson Guard",
        "item_gold": "3575",
        "item_image": "https://liquipedia.net/commons/images/1/17/Crimson_Guard.png",
        "ability": {
            "item_info": "Gives nearby allied heroes and buildings a damage block shell.",
            "Damage_Block": "70",
            "Block_Chance": "100%",
            "Duration": "12",
            "Radius": "1200",
            "cd": "40"
        },
        "creation": {
            "from": [
                "Vanguard",
                "Helm of Iron Will",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Eternal Shroud",
        "item_gold": "3300",
        "item_image": "https://liquipedia.net/commons/images/thumb/c/c5/Eternal_Shroud.png/85px-Eternal_Shroud.png",
        "ability": {
            "item_info": "Creates a shield that absorbs magical damage, converting damage taken into mana.",
            "Magic_Damage_Absorb": "400",
            "Duration": "12",
            "cd": "60",
            "mana": "50"
        },
        "creation": {
            "from": [
                "Hood of Defiance",
                "Voodoo Mask",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Heart of Tarrasque",
        "item_gold": "5000",
        "item_image": "https://liquipedia.net/commons/images/a/a6/Heart_of_Tarrasque.png",
        "ability": {},
        "creation": {
            "from": [
                "Vitality Booster",
                "Reaver",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Hood of Defiance",
        "item_gold": "1500",
        "item_image": "https://liquipedia.net/commons/images/b/b3/Hood_of_Defiance.png",
        "ability": {
            "item_info": "Creates a shield that absorbs magical damage.",
            "Magic_Damage_Blocked": "325",
            "Duration": "12",
            "cd": "60",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Ring of Health",
                "Cloak",
                "Ring of Regen"
            ],
            "become": [
                "Pipe of Insight"
            ]
        }
    },
    {
        "item_name": "Hurricane Pike",
        "item_gold": "4475",
        "item_image": "https://liquipedia.net/commons/images/7/78/Hurricane_Pike.png",
        "ability": {
            "item_info": "When used on an enemy, it pushes you both away from each other, and allows you to attack that target without range restrictions for a few seconds. These attacks also have an increased attack speed. Does not give vision over the enemy. Works normally like  Force Staff when used on self or allies.",
            "Enemy_Push_Distance": "450",
            "Enemy_Cast_Range": "400",
            "Ally_Push_Distance": "600",
            "Ally_Cast_Range": "550",
            "Push_Duration": "0.5",
            "Unrestricted_Duration": "6",
            "Unrestricted_Attacks": "5",
            "Bonus_Attack_Speed": "100",
            "cd": "23",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Linken's Sphere",
        "item_gold": "4600",
        "item_image": "https://liquipedia.net/commons/images/3/3c/Linkens_Sphere.png",
        "ability": {
            "item_info": "Temporarily removes Spellblock from the item's owner and transfers it to an allied unit.",
            "Buff_Duration": "12",
            "Cast_Range": "700",
            "cd": "12"
        },
        "creation": {
            "from": [
                "Ultimate Orb",
                "Perseverance",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Lotus Orb",
        "item_gold": "3850",
        "item_image": "https://liquipedia.net/commons/images/thumb/b/b1/Lotus_Orb.png/85px-Lotus_Orb.png",
        "ability": {
            "item_info": "Targets an allied unit, dispelling negative buffs (normal dispel, not stuns) and applying an Echo Shell buff. While the Echo Shell buff is active, it re-casts all targeted spells back at its caster.",
            "Duration": "6",
            "Cast_Range": "900",
            "cd": "15",
            "mana": "175"
        },
        "creation": {
            "from": [
                "Perseverance",
                "Platemail",
                "Energy Booster"
            ],
            "become": []
        }
    },
    {
        "item_name": "Manta Style",
        "item_gold": "4700",
        "item_image": "https://liquipedia.net/commons/images/b/b3/Manta_Style.png",
        "ability": {
            "item_info": "Creates controllable illusions of your hero that last a short time. Casting Mirror Image removes debuffs. Mirror Image resets the current attack and spell targeting priority when cast.",
            "Melee_Illusions": "Damage Dealt: 33%",
            "Ranged_Illusions": "Damage Dealt: 28%",
            "Illusions_Damage_Taken": "300%",
            "Illusions_Created": "2",
            "Illusion_Duration": "20",
            "Banish_Duration": "0.1",
            "cd": "30",
            "mana": "125"
        },
        "creation": {
            "from": [
                "Yasha",
                "Ultimate Orb",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Shiva's Guard",
        "item_gold": "4850",
        "item_image": "https://liquipedia.net/commons/images/8/89/Shivas_Guard.png",
        "ability": {
            "item_info": "Emits a freezing wave that deals damage to enemies and slows their movement for a few seconds. Activating this item does not break channeling abilities.",
            "Damage": "200",
            "Movement_Speed_Slow": "40%",
            "Slow_Duration": "4",
            "Blast_Wave_Speed": "350",
            "Radius": "1200",
            "cd": "30",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Platemail",
                "Mystic Staff",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Soul Booster",
        "item_gold": "3000",
        "item_image": "https://liquipedia.net/commons/images/thumb/a/a5/Soul_Booster.png/85px-Soul_Booster.png",
        "creation": {
            "from": [
                "Vitality Booster",
                "Energy Booster",
                "Point Booster"
            ],
            "become": [
                "Octarine Core",
                "Bloodstone"
            ]
        }
    },
    {
        "item_name": "Vanguard",
        "item_gold": "1825",
        "item_image": "https://liquipedia.net/commons/images/f/fd/Vanguard.png",
        "ability": {
            "item_info": "Blocks damage. The amount blocked depends on whether the user is a melee or ranged hero.",
            "Melee_Damage_Block": "64",
            "Ranged_Damage_Block": "32",
            "Block_Chance": "60%"
        },
        "creation": {
            "from": [
                "Ring of Health",
                "Vitality Booster"
            ],
            "become": [
                "Crimson Guard",
                "Abyssal Blade"
            ]
        }
    }
]

const MAGICAL = [
    {
        "item_name": "Aether Lens",
        "item_gold": "2275",
        "item_image": "https://liquipedia.net/commons/images/thumb/e/ee/Aether_Lens.png/85px-Aether_Lens.png",
        "ability": {
            "item_info": "Increases spell cast range.",
            "Bonus_Cast_Range": "225"
        },
        "creation": {
            "from": [
                "Energy Booster",
                "Void Stone",
                "Recipe"
            ],
            "become": [
                "Octarine Core"
            ]
        }
    },
    {
        "item_name": "Aghanim's Scepter",
        "item_gold": "4200",
        "item_image": "https://liquipedia.net/commons/images/d/da/Aghanims_Scepter.png",
        "ability": {
            "item_info": "Upgrades the spells of heroes. Applies all of its effects to the user.\nPossible upgrades include:\nUpgraded Ultimate\nUpgraded Spells\nGranted New Spell\nUpgraded Hero Stats"
        },
        "creation": {
            "from": [
                "Point Booster",
                "Staff of Wizardry",
                "Ogre Club",
                "Blade of Alacrity"
            ],
            "become": [
                "Aghanims Blessing"
            ]
        }
    },
    {
        "item_name": "Dagon",
        "item_gold": "2750 / 4050 / 5350 / 6650 / 7950",
        "item_image": "https://liquipedia.net/commons/images/c/c3/Dagon.png",
        "ability": {
            "item_info": "Deals an instant energy burst of magical damage to an enemy unit.",
            "Damage": "400 / 500 / 600 / 700 / 800",
            "Cast_Range": "600 / 650 / 700 / 750 / 800",
            "cd": "35 / 30 / 25 / 20 / 15",
            "mana": "120 / 140 / 160 / 180 / 200"
        },
        "creation": {
            "from": [
                "Staff of Wizardry",
                "Crown",
                "Recipe"
            ],
            "become": [
                "Dagon 2",
                "Dagon 3",
                "Dagon 4",
                "Dagon 5"
            ]
        }
    },
    {
        "item_name": "Eul's Scepter of Divinity",
        "item_gold": "2725",
        "item_image": "https://liquipedia.net/commons/images/2/2e/Euls_Scepter_of_Divinity.png",
        "ability": {
            "item_info": "The target unit is swept up in a cyclone, invulnerable to damage. Deals damage to the target at the end of the duration.",
            "Damage": "50",
            "Duration": "2.5",
            "Cast_Range": "550",
            "cd": "23",
            "mana": "175"
        },
        "creation": {
            "from": [
                "Staff of Wizardry",
                "Void Stone",
                "Wind Lace",
                "Recipe"
            ],
            "become": [
                "Wind Waker"
            ]
        }
    },
    {
        "item_name": "Force Staff",
        "item_gold": "2200",
        "item_image": "https://liquipedia.net/commons/images/9/9f/Force_Staff.png",
        "ability": {
            "item_info": "Forcibly pushes the target a short distance in the direction it was facing on cast.",
            "Push_Distance": "600",
            "Push_Duration": "0.5",
            "Cast_Range": "550",
            "cd": "23",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Staff of Wizardry",
                "Fluffy Hat",
                "Recipe"
            ],
            "become": [
                "Hurricane Pike"
            ]
        }
    },
    {
        "item_name": "Gleipnir",
        "item_gold": "6150",
        "item_image": "https://liquipedia.net/commons/images/thumb/6/6e/Gleipnir.png/85px-Gleipnir.png",
        "ability": {
            "item_info": "Roots enemies and deals damage.",
            "Root_Radius": "450",
            "Root_Duration": "2",
            "Damage": "220",
            "Projectile_Speed": "1900",
            "Cast_Range": "1100",
            "cd": "18",
            "mana": "200"
        },
        "creation": {
            "from": [
                "Maelstrom",
                "Rod of Atos",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Glimmer Cape",
        "item_gold": "1900",
        "item_image": "https://liquipedia.net/commons/images/thumb/a/ae/Glimmer_Cape.png/85px-Glimmer_Cape.png",
        "ability": {
            "item_info": "Targets an allied unit and makes it turn invisible after a short fade time. While invisible, it gains bonus magic resistance. The invisible unit is allowed to move during the invisibility, but attacking or casting a spell will cause the fade time to trigger again.",
            "Fade_Time": "0.6",
            "Magic_Resistance": "45%",
            "Duration": "5",
            "Cast_Range": "550",
            "Nearby_Cast_Range": "1050",
            "cd": "14",
            "mana": "90"
        },
        "creation": {
            "from": [
                "Shadow Amulet",
                "Cloak",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Octarine Core",
        "item_gold": "5275",
        "item_image": "https://liquipedia.net/commons/images/thumb/2/2e/Octarine_Core.png/85px-Octarine_Core.png",
        "ability": {
            "item_info": "Reduces all cooldowns of spells and items for the holder.",
            "Cooldown_Reduction": "25%"
        },
        "creation": {
            "from": [
                "Aether Lens",
                "Soul Booster"
            ],
            "become": []
        }
    },
    {
        "item_name": "Refresher Orb",
        "item_gold": "5000",
        "item_image": "https://liquipedia.net/commons/images/a/a2/Refresher_Orb.png",
        "ability": {
            "item_info": "Resets the cooldowns of all your items and abilities.",
            "cd": "160",
            "mana": "300"
        },
        "creation": {
            "from": [
                "Perseverance",
                "Perseverance",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Rod of Atos",
        "item_gold": "2750",
        "item_image": "https://liquipedia.net/commons/images/thumb/5/55/Rod_of_Atos.png/85px-Rod_of_Atos.png",
        "ability": {
            "item_info": "Roots the target, preventing them from moving.",
            "Root_Duration": "2",
            "Projective_Speed": "1900",
            "Cast_Range": "1100",
            "cd": "18",
            "mana": "50"
        },
        "creation": {
            "from": [
                "Staff of Wizardry",
                "Crown",
                "Crown",
                "Recipe"
            ],
            "become": [
                "Gleipnir"
            ]
        }
    },
    {
        "item_name": "Scythe of Vyse",
        "item_gold": "5675",
        "item_image": "https://liquipedia.net/commons/images/thumb/b/b3/Scythe_of_Vyse.png/85px-Scythe_of_Vyse.png",
        "ability": {
            "item_info": "Turns the target unit into a harmless critter. Hex will disarm, silence, mute, and slow the target.",
            "Hex_Duration": "3.5",
            "Enemy_Base_Speed": "140",
            "Cast_Range": "800",
            "cd": "22",
            "mana": "250"
        },
        "creation": {
            "from": [
                "Mystic Staff",
                "Ultimate Orb",
                "Void Stone"
            ],
            "become": []
        }
    },
    {
        "item_name": "Solar Crest",
        "item_gold": "2625",
        "item_image": "https://liquipedia.net/commons/images/thumb/5/59/Solar_Crest.png/85px-Solar_Crest.png",
        "ability": {
            "item_info": "When cast on an ally it increases armor, attack speed, and movement speed. When cast on an enemy it reduces armor, attack speed, and movement speed. Removes the armor from the caster when used.",
            "Ally_Armor_Bonus": "6",
            "Ally_Attack_Speed_Bonus": "55",
            "Ally_Movement_Speed_Bonus": "10%",
            "Enemy_Armor_Reduction": "6",
            "Enemy_Attack_Speed_Reduction": "55",
            "Enemy_Movement_Speed_Reduction": "10%",
            "Duration": "12",
            "Cast_Range": "1000",
            "cd": "12"
        },
        "creation": {
            "from": [
                "Medallion of Courage",
                "Crown",
                "Wind Lace",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Veil of Discord",
        "item_gold": "1525",
        "item_image": "https://liquipedia.net/commons/images/f/f0/Veil_of_Discord.png",
        "ability": {
            "item_info": "Emits a weakening blast that amplifies the spell damage enemies take.",
            "Spell_Damage_Amplification": "18%",
            "Duration": "16",
            "Radius": "600",
            "Cast_Range": "1000",
            "cd": "25",
            "mana": "50"
        },
        "creation": {
            "from": [
                "Ring of Basilius",
                "Crown",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Wind Waker",
        "item_gold": "6825",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/06/Wind_Waker.png/85px-Wind_Waker.png",
        "ability": {
            "item_info": "The target unit is swept up in a cyclone, invulnerable to damage. Deals damage to the target at the end of the duration.",
            "Damage": "50",
            "Duration": "2.5",
            "Cast_Range": "550",
            "cd": "18",
            "mana": "175"
        },
        "creation": {
            "from": [
                "Euls Scepter of Divinity",
                "Mystic Staff",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Witch Blade",
        "item_gold": "2600",
        "item_image": "https://liquipedia.net/commons/images/thumb/f/f9/Witch_Blade.png/85px-Witch_Blade.png",
        "ability": {
            "item_info": "Your attacks deal extra damage and slow enemies.",
            "Intelligence_as_damage_multiplier": "0.75",
            "Slow": "25%",
            "Duration": "4"
        },
        "creation": {
            "from": [
                "Blitz Knuckles",
                "Robe of the Magi",
                "Chainmail",
                "Recipe"
            ],
            "become": []
        }
    }
]

const SUPPORT = [
    {
        "item_name": "Arcane Boots",
        "item_gold": "1300",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/15/Arcane_Boots.png/85px-Arcane_Boots.png",
        "ability": {
            "item_info": "Instantly restores mana to self and allied heroes in a radius around the user.",
            "Mana_Restored": "175",
            "Radius": "1200",
            "cd": "55"
        },
        "creation": {
            "from": [
                "Boots of Speed",
                "Energy Booster"
            ],
            "become": [
                "Guardian Greaves"
            ]
        }
    },
    {
        "item_name": "Buckler",
        "item_gold": "425",
        "item_image": "https://liquipedia.net/commons/images/thumb/7/74/Buckler.png/85px-Buckler.png",
        "ability": {
            "item_info": "Gives additional armor to allies within the aura.",
            "Armor": "2",
            "Radius": "1200"
        },
        "creation": {
            "from": [
                "Ring of Protection",
                "Recipe"
            ],
            "become": [
                "Assault Cuirass",
                "Guardian Greaves",
                "Vladmirs Offering"
            ]
        }
    },
    {
        "item_name": "Drum of Endurance",
        "item_gold": "1700",
        "item_image": "https://liquipedia.net/commons/images/a/a9/Drum_of_Endurance.png",
        "ability": {
            "item_info": "Gives bonus attack and movement speed to surrounding allies.",
            "Bonus_Movement_Speed": "13%",
            "Bonus_Attack_Speed": "45",
            "Radius": "1200",
            "Duration": "6",
            "Charges": "8",
            "cd": "30"
        },
        "creation": {
            "from": [
                "Robe of the Magi",
                "Belt of Strength",
                "Wind Lace",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Guardian Greaves",
        "item_gold": "5100",
        "item_image": "https://liquipedia.net/commons/images/thumb/5/57/Guardian_Greaves.png/85px-Guardian_Greaves.png",
        "ability": {
            "item_info": "Restores health and mana to nearby allies. Removes negative debuffs from the caster upon cast.",
            "Health_Restored": "300",
            "Mana_Restored": "200",
            "Radius": "1200",
            "cd": "40"
        },
        "creation": {
            "from": [
                "Mekansm",
                "Arcane Boots",
                "Recipe",
                "Buckler"
            ],
            "become": []
        }
    },
    {
        "item_name": "Headdress",
        "item_gold": "425",
        "item_image": "https://liquipedia.net/commons/images/e/ea/Headdress.png",
        "ability": {
            "item_info": "Gives additional hp regeneration to allies within the aura.",
            "Health_Regeneration": "2",
            "Radius": "1200"
        },
        "creation": {
            "from": [
                "Ring of Regen",
                "Recipe"
            ],
            "become": [
                "Helm of the Dominator",
                "Mekansm",
                "Pipe of Insight"
            ]
        }
    },
    {
        "item_name": "Holy Locket",
        "item_gold": "2400",
        "item_image": "https://liquipedia.net/commons/images/thumb/e/ec/Holy_Locket.png/85px-Holy_Locket.png",
        "ability": {
            "item_info": "Now automatically gains a charge every 15 seconds.Gains charges based on visible enemy heroes using spells or abilities nearby.",
            "Automatic_Gains_Charge_Interval": "10",
            "Health/Mana_Per_Charge": "15",
            "Maximum_Charges": "20",
            "Charge_Gain_Radius": "1200",
            "Allied_Units_Cast_Range": "500",
            "cd": "13"
        },
        "creation": {
            "from": [
                "Fluffy Hat",
                "Headdress",
                "Energy Booster",
                "Magic Wand",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Medallion of Courage",
        "item_gold": "1075",
        "item_image": "https://liquipedia.net/commons/images/6/62/Medallion_of_Courage.png",
        "ability": {
            "item_info": "If cast on an ally, increases their armor while reducing the caster's armor. If cast on an enemy, reduces the armor of both the enemy and the caster.",
            "Ally_Armor_Bonus": "5",
            "Enemy_Armor_Reduction": "5",
            "Duration": "7",
            "Cast_Range": "1000",
            "cd": "12"
        },
        "creation": {
            "from": [
                "Chainmail",
                "Sages Mask",
                "Blight Stone"
            ],
            "become": [
                "Solar Crest"
            ]
        }
    },
    {
        "item_name": "Mekansm",
        "item_gold": "1875",
        "item_image": "https://liquipedia.net/commons/images/thumb/b/b8/Mekansm.png/85px-Mekansm.png",
        "ability": {
            "item_info": "Instantly heals allies around the user.",
            "Health_Restored": "275",
            "Radius": "1200",
            "cd": "65",
            "mana": "225"
        },
        "creation": {
            "from": [
                "Headdress",
                "Chainmail",
                "Recipe"
            ],
            "become": [
                "Guardian Greaves"
            ]
        }
    },
    {
        "item_name": "Pipe of Insight",
        "item_gold": "3475",
        "item_image": "https://liquipedia.net/commons/images/1/1e/Pipe_of_Insight.png",
        "ability": {
            "item_info": "Gives nearby allies a shield that blocks a set amount of damage.",
            "Magical_Damage_Block": "400",
            "Duration": "12",
            "Radius": "1200",
            "cd": "60",
            "mana": "100"
        },
        "creation": {
            "from": [
                "Hood of Defiance",
                "Headdress",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Ring of Basilius",
        "item_gold": "425",
        "item_image": "https://liquipedia.net/commons/images/thumb/a/a4/Ring_of_Basilius.png/85px-Ring_of_Basilius.png",
        "ability": {
            "item_info": "Grants mana regeneration to allied units within range.",
            "Bonus_Mana_Regen": "1.4",
            "Radius": "1200"
        },
        "creation": {
            "from": [
                "Sages Mask",
                "Recipe"
            ],
            "become": [
                "Veil of Discord",
                "Vladmirs Offering"
            ]
        }
    },
    {
        "item_name": "Spirit Vessel",
        "item_gold": "2840",
        "item_image": "https://liquipedia.net/commons/images/9/92/Spirit_Vessel.png",
        "ability": {
            "item_info": "Heals HP over time for friendly units, and deals damage over time for enemy units. The healing effect is lost if the affected unit takes player-based damage, or is hit by Roshan. Gains a charge every time an enemy hero dies nearby. If the Vessel is empty and has no charges, it gains 2 charges instead. Only the closest Vessel to the dying hero will gain a charge.",
            "Ally_Heal_Per_Second": "40",
            "Enemy_Damage_Per_Second": "35 + 4% of current health",
            "Enemy_Heal_Reduction": "45%",
            "Duration": "8",
            "Charge_Gain_Radius": "1400",
            "Cast_Range": "950",
            "cd": "7"
        },
        "creation": {
            "from": [
                "Urn of Shadows",
                "Vitality Booster",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Tranquil Boots",
        "item_gold": "925",
        "item_image": "https://liquipedia.net/commons/images/2/22/Tranquil_Boots.png",
        "ability": {
            "item_info": "If you attack or have been attacked, the movement speed bonus from Tranquil Boots is reduced, and the bonus health regen is disabled. Restores to normal when you have not attacked or been attacked recently.",
            "Broken_Movement_Speed": "40",
            "Broken_Health_Regen": "0",
            "Duration": "13"
        },
        "creation": {
            "from": [
                "Boots of Speed",
                "Wind Lace",
                "Ring of Regen"
            ],
            "become": []
        }
    },
    {
        "item_name": "Urn of Shadows",
        "item_gold": "840",
        "item_image": "https://liquipedia.net/commons/images/7/78/Urn_of_Shadows.png",
        "ability": {
            "item_info": "Heals HP over time for friendly units, and deals damage over time for enemy units. The healing effect is lost if the affected unit takes damage from heroes, hero controlled units or Roshan. Gains a charge every time an enemy hero dies nearby. If the Urn is empty and has no charges, it gains 2 charges instead. Only the closest Urn to the dying hero will gain a charge.",
            "Ally_Heal": "240",
            "Enemy_Damage": "200",
            "Duration": "8",
            "Charge_Gain_Radius": "1400",
            "Cast_Range": "950",
            "cd": "7"
        },
        "creation": {
            "from": [
                "Sages Mask",
                "Circlet",
                "Ring of Protection",
                "Recipe"
            ],
            "become": [
                "Spirit Vessel"
            ]
        }
    },
    {
        "item_name": "Vladmir's Offering",
        "item_gold": "2600",
        "item_image": "https://liquipedia.net/commons/images/f/f5/Vladmirs_Offering.png",
        "ability": {
            "item_info": "Grants a variety of bonuses to nearby allies.",
            "Lifesteal": "15%",
            "Mana_Regeneration": "1.75",
            "Damage": "18%",
            "Armor": "3",
            "Radius": "1200"
        },
        "creation": {
            "from": [
                "Buckler",
                "Ring of Basilius",
                "Morbid Mask",
                "Blades of Attack",
                "Recipe"
            ],
            "become": [
                "Helm of the Overlord"
            ]
        }
    }
]

const ACCESSORIES = [
    {
        "item_name": "Boots of Travel",
        "item_gold": "2500 / 4500",
        "item_image": "https://liquipedia.net/commons/images/d/d8/Boots_of_Travel.png",
        "ability": {
            "item_info": "Teleports you to an allied non-hero unit or building. While channeling, gives vision of the target area and pings the minimap.\nCan target allied heroes when upgraded to level 2.",
            "Channel_Time": "3",
            "Outpost_Channel_Time": "6",
            "Cast_Range": "Global",
            "cd": "40 / 30",
            "mana": "75"
        },
        "creation": {
            "from": [
                "Boots of Speed",
                "Recipe"
            ],
            "become": [
                "Boots of Travel 2"
            ]
        }
    },
    {
        "item_name": "Bracer",
        "item_gold": "510",
        "item_image": "https://liquipedia.net/commons/images/thumb/7/7c/Bracer.png/85px-Bracer.png",
        "creation": {
            "from": [
                "Circlet",
                "Gauntlets of Strength",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Falcon Blade",
        "item_gold": "1125",
        "item_image": "https://liquipedia.net/commons/images/thumb/a/ab/Falcon_Blade.png/85px-Falcon_Blade.png",
        "creation": {
            "from": [
                "Fluffy Hat",
                "Sages Mask",
                "Blades of Attack",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Hand of Midas",
        "item_gold": "2200",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/1a/Hand_of_Midas.png/85px-Hand_of_Midas.png",
        "ability": {
            "item_info": "Kills an enemy creep, turning it into reliable gold and bonus experience for the user.",
            "Gold_Gain": "160",
            "Experience_Gain": "2.1×",
            "Cast_Range": "600",
            "cd": "90"
        },
        "creation": {
            "from": [
                "Gloves of Haste",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Helm of the Dominator",
        "item_gold": "2375",
        "item_image": "https://liquipedia.net/commons/images/6/61/Helm_of_the_Dominator.png",
        "ability": {
            "item_info": "Take control of a target creep. If the dominated creep's base health is below the health minimum, its base health will be raised to the health minimum. The dominated creep also has a base speed set. Dominating a new creep will replace your currently controlled creep.",
            "Minimum_Base_HP": "1000",
            "Base_Speed": "380",
            "Cast_Range": "700",
            "Creep_Base_Damage_Buff": "+25",
            "Creep_HP_Regen_Buff": "+12",
            "Creep_Mana_Regen_Buff": "+4",
            "Creep_Armor_Buff": "+4",
            "cd": "45"
        },
        "creation": {
            "from": [
                "Helm of Iron Will",
                "Crown",
                "Recipe"
            ],
            "become": [
                "Helm of the Overlord"
            ]
        }
    },
    {
        "item_name": "Helm of the Overlord",
        "item_gold": "6400",
        "item_image": "https://liquipedia.net/commons/images/thumb/5/5f/Helm_of_the_Overlord.png/85px-Helm_of_the_Overlord.png",
        "ability": {
            "item_info": "Take control of a target creep. If the dominated creep's base health is below the health minimum, its base health will be raised to the health minimum. The dominated creep also has a base speed set. Dominating a 2nd creep will replace 1st controlled creep.",
            "Minimum_Base_HP": "1800",
            "Base_Speed": "380",
            "Cast_Range": "700",
            "Creep_Base_Movement_Speed": "400",
            "Creep_Base_Damage_Buff": "+80",
            "Creep_HP_Regen_Buff": "+12",
            "Creep_Mana_Regen_Buff": "+4",
            "Creep_Armor_Buff": "+8",
            "Max_Dominate": "1",
            "Dominated_Creep_Bounty": "250",
            "cd": "45"
        },
        "creation": {
            "from": [
                "Helm of the Dominator",
                "Vladmirs Offering",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Magic Wand",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/b/bc/Magic_Wand.png",
        "ability": {
            "item_info": "Gains charges based on visible enemy heroes using spells or abilities nearby.",
            "Health/Mana_Per_Charge": "15",
            "Maximum_Charges": "20",
            "Charge_Gain_Radius": "1200",
            "cd": "13"
        },
        "creation": {
            "from": [
                "Magic Stick",
                "Iron Branch",
                "Iron Branch",
                "Recipe"
            ],
            "become": [
                "Holy Locket"
            ]
        }
    },
    {
        "item_name": "Mask of Madness",
        "item_gold": "1775",
        "item_image": "https://liquipedia.net/commons/images/3/3e/Mask_of_Madness.png",
        "ability": {
            "item_info": "Gives rapid attack speed and additional movement speed, but silences the user and reduces their armor.",
            "Bonus_Movement_Speed": "30",
            "Bonus_Attack_Speed": "110",
            "Self_Armor_Reduction": "8",
            "Self_Silence_Duration": "6",
            "cd": "16",
            "mana": "25"
        },
        "creation": {
            "from": [
                "Morbid Mask",
                "Quarterstaff"
            ],
            "become": []
        }
    },
    {
        "item_name": "Moon Shard",
        "item_gold": "4000",
        "item_image": "https://liquipedia.net/commons/images/thumb/9/90/Moon_Shard.png/85px-Moon_Shard.png",
        "ability": {
            "item_info": "Can be consumed to gain a permanent buff at lesser values. The bonus does not stack with itself.",
            "Bonus_Attack_Speed": "60",
            "Bonus_Night_Vision": "200",
            "Cast_Range": "Global"
        },
        "creation": {
            "from": [
                "Hyperstone",
                "Hyperstone"
            ],
            "become": []
        }
    },
    {
        "item_name": "Null Talisman",
        "item_gold": "510",
        "item_image": "https://liquipedia.net/commons/images/a/a8/Null_Talisman.png",
        "creation": {
            "from": [
                "Circlet",
                "Mantle of Intelligence",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Oblivion Staff",
        "item_gold": "1500",
        "item_image": "https://liquipedia.net/commons/images/1/1c/Oblivion_Staff.png",
        "creation": {
            "from": [
                "Quarterstaff",
                "Sages Mask",
                "Robe of the Magi"
            ],
            "become": [
                "Orchid Malevolence",
                "Echo Sabre",
                "Silver Edge"
            ]
        }
    },
    {
        "item_name": "Orb of Corrosion",
        "item_gold": "925",
        "item_image": "https://liquipedia.net/commons/images/thumb/d/db/Orb_of_Corrosion.png/85px-Orb_of_Corrosion.png",
        "ability": {
            "item_info": "Your attacks deal extra damage, reduce armor and slow enemies.",
            "Damage_per_Second": "3",
            "Armor_Reduction": "3",
            "Melee_Slow": "13%",
            "Ranged_Slow": "4%",
            "Duration": "3"
        },
        "creation": {
            "from": [
                "Orb of Venom",
                "Blight Stone",
                "Fluffy Hat",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Perseverance",
        "item_gold": "1650",
        "item_image": "https://liquipedia.net/commons/images/7/7f/Perseverance.png",
        "creation": {
            "from": [
                "Ring of Health",
                "Void Stone"
            ],
            "become": [
                "Refresher Orb",
                "Linkens Sphere",
                "Lotus Orb",
                "Battle Fury",
                "Meteor Hammer"
            ]
        }
    },
    {
        "item_name": "Phase Boots",
        "item_gold": "1500",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/1e/Phase_Boots.png/85px-Phase_Boots.png",
        "ability": {
            "item_info": "When activated, gain increased movement speed, unit phasing, and faster turn rate. The movement speed buff depends on whether user is melee or ranged.",
            "Melee_Bonus_Movement_Speed": "20%",
            "Ranged_Bonus_Movement_Speed": "10%",
            "Turn_Rate": "1",
            "Duration": "3",
            "cd": "8"
        },
        "creation": {
            "from": [
                "Boots of Speed",
                "Chainmail",
                "Blades of Attack"
            ],
            "become": []
        }
    },
    {
        "item_name": "Power Treads",
        "item_gold": "1400",
        "item_image": "https://liquipedia.net/commons/images/7/73/Power_Treads.png",
        "ability": {
            "item_info": "Raises the selected stat. Changes attribute stat bonus between Strength, Intelligence, and Agility, in that order.",
            "Selected_Stat_Increase": "10"
        },
        "creation": {
            "from": [
                "Boots of Speed",
                "Gloves of Haste",
                "Belt of Strength"
            ],
            "become": []
        }
    },
    {
        "item_name": "Soul Ring",
        "item_gold": "740",
        "item_image": "https://liquipedia.net/commons/images/d/d4/Soul_Ring.png",
        "ability": {
            "item_info": "Consumes the user's HP to temporarily gain mana. The bonus mana will disappear if not used.",
            "HP_Cost": "170",
            "Mana_Gain": "150",
            "Mana_Duration": "10",
            "cd": "25"
        },
        "creation": {
            "from": [
                "Ring of Protection",
                "Gauntlets of Strength",
                "Gauntlets of Strength",
                "Recipe"
            ],
            "become": []
        }
    },
    {
        "item_name": "Wraith Band",
        "item_gold": "510",
        "item_image": "https://liquipedia.net/commons/images/thumb/6/62/Wraith_Band.png/85px-Wraith_Band.png",
        "creation": {
            "from": [
                "Circlet",
                "Slippers of Agility",
                "Recipe"
            ],
            "become": []
        }
    }
]

const SECRET_SHOP = [
    {
        "item_name": "Demon Edge",
        "item_gold": "2200",
        "item_image": "https://liquipedia.net/commons/images/a/ae/Demon_Edge.png",
        "creation": {
            "from": [],
            "become": [
                "Divine Rapier",
                "Monkey King Bar",
                "Daedalus"
            ]
        }
    },
    {
        "item_name": "Eaglesong",
        "item_gold": "2800",
        "item_image": "https://liquipedia.net/commons/images/9/92/Eaglesong.png",
        "creation": {
            "from": [],
            "become": [
                "Butterfly",
                "Ethereal Blade",
                "Swift Blink"
            ]
        }
    },
    {
        "item_name": "Energy Booster",
        "item_gold": "800",
        "item_image": "https://liquipedia.net/commons/images/a/ad/Energy_Booster.png",
        "creation": {
            "from": [],
            "become": [
                "Holy Locket",
                "Aether Lens",
                "Lotus Orb",
                "Aeon Disk",
                "Soul Booster",
                "Arcane Boots"
            ]
        }
    },
    {
        "item_name": "Hyperstone",
        "item_gold": "2000",
        "item_image": "https://liquipedia.net/commons/images/thumb/c/c1/Hyperstone.png/85px-Hyperstone.png",
        "creation": {
            "from": [],
            "become": [
                "Bloodthorn",
                "Assault Cuirass",
                "Moon Shard",
                "Mjollnir"
            ]
        }
    },
    {
        "item_name": "Mystic Staff",
        "item_gold": "2800",
        "item_image": "https://liquipedia.net/commons/images/7/76/Mystic_Staff.png",
        "creation": {
            "from": [],
            "become": [
                "Scythe of Vyse",
                "Wind Waker",
                "Shivas Guard",
                "Arcane Blink"
            ]
        }
    },
    {
        "item_name": "Platemail",
        "item_gold": "1400",
        "item_image": "https://liquipedia.net/commons/images/c/c2/Platemail.png",
        "creation": {
            "from": [],
            "become": [
                "Assault Cuirass",
                "Shivas Guard",
                "Lotus Orb"
            ]
        }
    },
    {
        "item_name": "Point Booster",
        "item_gold": "1200",
        "item_image": "https://liquipedia.net/commons/images/0/0d/Point_Booster.png",
        "creation": {
            "from": [],
            "become": [
                "Aghanims Scepter",
                "Soul Booster",
                "Eye of Skadi"
            ]
        }
    },
    {
        "item_name": "Reaver",
        "item_gold": "2800",
        "item_image": "https://liquipedia.net/commons/images/c/cb/Reaver.png",
        "creation": {
            "from": [],
            "become": [
                "Heart of Tarrasque",
                "Satanic",
                "Overwhelming Blink"
            ]
        }
    },
    {
        "item_name": "Ring of Health",
        "item_gold": "825",
        "item_image": "https://liquipedia.net/commons/images/thumb/d/d0/Ring_of_Health.png/85px-Ring_of_Health.png",
        "creation": {
            "from": [],
            "become": [
                "Perseverance",
                "Vanguard",
                "Hood of Defiance"
            ]
        }
    },
    {
        "item_name": "Sacred Relic",
        "item_gold": "3750",
        "item_image": "https://liquipedia.net/commons/images/thumb/4/41/Sacred_Relic.png/85px-Sacred_Relic.png",
        "creation": {
            "from": [],
            "become": [
                "Nullifier",
                "Divine Rapier",
                "Radiance"
            ]
        }
    },
    {
        "item_name": "Talisman of Evasion",
        "item_gold": "1300",
        "item_image": "https://liquipedia.net/commons/images/1/10/Talisman_of_Evasion.png",
        "creation": {
            "from": [],
            "become": [
                "Butterfly",
                "Heavens Halberd"
            ]
        }
    },
    {
        "item_name": "Ultimate Orb",
        "item_gold": "2050",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/07/Ultimate_Orb.png/85px-Ultimate_Orb.png",
        "creation": {
            "from": [],
            "become": [
                "Scythe of Vyse",
                "Linkens Sphere",
                "Eye of Skadi",
                "Helm of the Overlord",
                "Manta Style"
            ]
        }
    },
    {
        "item_name": "Vitality Booster",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/6/65/Vitality_Booster.png",
        "creation": {
            "from": [],
            "become": [
                "Heart of Tarrasque",
                "Aeon Disk",
                "Spirit Vessel",
                "Vanguard",
                "Soul Booster"
            ]
        }
    },
    {
        "item_name": "Void Stone",
        "item_gold": "825",
        "item_image": "https://liquipedia.net/commons/images/c/c2/Void_Stone.png",
        "creation": {
            "from": [],
            "become": [
                "Perseverance",
                "Scythe of Vyse",
                "Euls Scepter of Divinity",
                "Aether Lens"
            ]
        }
    }
]

const MISCELLANEOUS = [
    {
        "item_name": "Blink Dagger",
        "item_gold": "2250",
        "item_image": "https://liquipedia.net/commons/images/0/00/Blink_Dagger.png",
        "ability": {
            "item_info": "Teleport to a target point. If damage is taken from a player (heroes, units under their control, and self damage) or Roshan, blink dagger will be disabled for a few seconds.",
            "Blink_Distance": "1200",
            "Penalty_Distance": "960",
            "Disabled_Time_On_Hit": "3",
            "cd": "15"
        },
        "creation": {
            "from": [],
            "become": [
                "Overwhelming Blink",
                "Swift Blink",
                "Arcane Blink"
            ]
        }
    },
    {
        "item_name": "Blitz Knuckles",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/d/d9/Blitz_Knuckles.png",
        "creation": {
            "from": [],
            "become": [
                "Witch Blade",
                "Monkey King Bar",
                "Shadow Blade"
            ]
        }
    },
    {
        "item_name": "Boots of Speed",
        "item_gold": "500",
        "item_image": "https://liquipedia.net/commons/images/0/07/Boots_of_Speed.png",
        "creation": {
            "from": [],
            "become": [
                "Boots of Travel",
                "Phase Boots",
                "Power Treads",
                "Arcane Boots",
                "Tranquil Boots"
            ]
        }
    },
    {
        "item_name": "Cloak",
        "item_gold": "500",
        "item_image": "https://liquipedia.net/commons/images/2/2b/Cloak_dota2.png",
        "creation": {
            "from": [],
            "become": [
                "Hood of Defiance",
                "Mage Slayer",
                "Glimmer Cape"
            ]
        }
    },
    {
        "item_name": "Fluffy Hat",
        "item_gold": "250",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/18/Fluffy_Hat.png/85px-Fluffy_Hat.png",
        "creation": {
            "from": [],
            "become": [
                "Force Staff",
                "Orb of Corrosion",
                "Falcon Blade",
                "Holy Locket"
            ]
        }
    },
    {
        "item_name": "Gem of True Sight",
        "item_gold": "900",
        "item_image": "https://liquipedia.net/commons/images/thumb/3/3a/Gem_of_True_Sight.png/85px-Gem_of_True_Sight.png",
        "ability": {
            "item_info": "Gives the holder True Sight and the ability to see invisible units. Only works when held by a hero.",
            "True_Sight_Radius": "900"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Ghost Scepter",
        "item_gold": "1500",
        "item_image": "https://liquipedia.net/commons/images/2/29/Ghost_Scepter.png",
        "ability": {
            "item_info": "Become ethereal. You are unable to attack or be attacked, and take extra magic damage.",
            "Magic_Amplification_Taken": "40%",
            "Duration": "4",
            "cd": "20"
        },
        "creation": {
            "from": [],
            "become": [
                "Ethereal Blade"
            ]
        }
    },
    {
        "item_name": "Magic Stick",
        "item_gold": "200",
        "item_image": "https://liquipedia.net/commons/images/6/63/Magic_Stick.png",
        "ability": {
            "item_info": "Gains charges based on visible enemy heroes using spells or abilities nearby.",
            "Health/Mana_Restored": "15 per charge",
            "Maximum_Charges": "10",
            "Charge_Gain_Radius": "1200",
            "cd": "13"
        },
        "creation": {
            "from": [],
            "become": [
                "Magic Wand"
            ]
        }
    },
    {
        "item_name": "Morbid Mask",
        "item_gold": "900",
        "item_image": "https://liquipedia.net/commons/images/thumb/1/1d/Morbid_Mask.png/85px-Morbid_Mask.png",
        "creation": {
            "from": [],
            "become": [
                "Satanic",
                "Mask of Madness",
                "Vladmirs Offering"
            ]
        }
    },
    {
        "item_name": "Ring of Regen",
        "item_gold": "175",
        "item_image": "https://liquipedia.net/commons/images/thumb/2/28/Ring_of_Regen.png/85px-Ring_of_Regen.png",
        "creation": {
            "from": [],
            "become": [
                "Headdress",
                "Force Staff",
                "Meteor Hammer",
                "Hood of Defiance",
                "Soul Ring",
                "Tranquil Boots"
            ]
        }
    },
    {
        "item_name": "Sage's Mask",
        "item_gold": "175",
        "item_image": "https://liquipedia.net/commons/images/2/2b/Sages_Mask.png",
        "creation": {
            "from": [],
            "become": [
                "Oblivion Staff",
                "Ring of Basilius",
                "Urn of Shadows",
                "Falcon Blade",
                "Medallion of Courage"
            ]
        }
    },
    {
        "item_name": "Shadow Amulet",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/d/dd/Shadow_Amulet.png",
        "ability": {
            "item_info": "Upon activation, grants invisibility to the target allied hero. Moving will break the invisibility.",
            "Fade_Time": "1.25",
            "Cast_Range": "600",
            "Nearby_Cast_Range": "850",
            "Self_Cast_Cooldown": "0",
            "cd": "7"
        },
        "creation": {
            "from": [],
            "become": [
                "Shadow Blade",
                "Glimmer Cape"
            ]
        }
    },
    {
        "item_name": "Voodoo Mask",
        "item_gold": "700",
        "item_image": "https://liquipedia.net/commons/images/f/f1/Voodoo_Mask.png",
        "ability": {
            "item_info": "Restores health for a percentage of any damage dealt from spells. Lifesteals less from damage dealt to creeps.",
            "Hero_Lifesteal": "10%",
            "Creep_Lifesteal": "2%"
        },
        "creation": {
            "from": [],
            "become": [
                "Bloodstone",
                "Eternal Shroud"
            ]
        }
    },
    {
        "item_name": "Wind Lace",
        "item_gold": "250",
        "item_image": "https://liquipedia.net/commons/images/a/a1/Wind_Lace.png",
        "creation": {
            "from": [],
            "become": [
                "Euls Scepter of Divinity",
                "Drum of Endurance",
                "Solar Crest",
                "Tranquil Boots"
            ]
        }
    }
]

const EQUIPMENTS = [
    {
        "item_name": "Blades of Attack",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/6/65/Blades_of_Attack.png",
        "creation": {
            "from": [],
            "become": [
                "Phase Boots",
                "Crystalys",
                "Armlet of Mordiggian",
                "Falcon Blade",
                "Vladmirs Offering"
            ]
        }
    },
    {
        "item_name": "Blight Stone",
        "item_gold": "300",
        "item_image": "https://liquipedia.net/commons/images/d/d5/Blight_Stone.png",
        "ability": {
            "item_info": "Your attacks reduce enemy armor.",
            "Armor_Reduction": "2",
            "Duration": "8"
        },
        "creation": {
            "from": [],
            "become": [
                "Orb of Corrosion",
                "Medallion of Courage",
                "Desolator"
            ]
        }
    },
    {
        "item_name": "Broadsword",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/8/87/Broadsword.png",
        "creation": {
            "from": [],
            "become": [
                "Blade Mail",
                "Battle Fury",
                "Crystalys",
                "Shadow Blade"
            ]
        }
    },
    {
        "item_name": "Chainmail",
        "item_gold": "550",
        "item_image": "https://liquipedia.net/commons/images/e/e5/Chainmail.png",
        "creation": {
            "from": [],
            "become": [
                "Phase Boots",
                "Witch Blade",
                "Blade Mail",
                "Medallion of Courage",
                "Mekansm"
            ]
        }
    },
    {
        "item_name": "Claymore",
        "item_gold": "1350",
        "item_image": "https://liquipedia.net/commons/images/0/0c/Claymore.png",
        "creation": {
            "from": [],
            "become": [
                "Battle Fury",
                "Satanic",
                "Mage Slayer"
            ]
        }
    },
    {
        "item_name": "Gloves of Haste",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/thumb/0/0d/Gloves_of_Haste.png/85px-Gloves_of_Haste.png",
        "creation": {
            "from": [],
            "become": [
                "Power Treads",
                "Hand of Midas",
                "Armlet of Mordiggian",
                "Glimmer Cape"
            ]
        }
    },
    {
        "item_name": "Helm of Iron Will",
        "item_gold": "975",
        "item_image": "https://liquipedia.net/commons/images/3/30/Helm_of_Iron_Will.png",
        "creation": {
            "from": [],
            "become": [
                "Nullifier",
                "Crimson Guard",
                "Armlet of Mordiggian",
                "Helm of the Dominator"
            ]
        }
    },
    {
        "item_name": "Infused Raindrops",
        "item_gold": "225",
        "item_image": "https://liquipedia.net/commons/images/1/10/Infused_Raindrop.png",
        "ability": {
            "item_info": "When you receive over the threshold of magic damage it procs, consuming a charge and blocking magic damage.",
            "Damage_Threshold": "50",
            "Magic_Damage_Blocked": "120",
            "Charges": "6",
            "cd": "7"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Javelin",
        "item_gold": "1100",
        "item_image": "https://liquipedia.net/commons/images/1/1d/Javelin.png",
        "ability": {
            "item_info": "Javelin has a chance to pierce through evasion and deal bonus damage.",
            "Accuracy_Chance": "30%",
            "Bonus_Damage": "70"
        },
        "creation": {
            "from": [],
            "become": [
                "Monkey King Bar",
                "Maelstrom"
            ]
        }
    },
    {
        "item_name": "Mithril Hammer",
        "item_gold": "1600",
        "item_image": "https://liquipedia.net/commons/images/6/62/Mithril_Hammer.png",
        "creation": {
            "from": [],
            "become": [
                "Black King Bar",
                "Skull Basher",
                "Battle Fury",
                "Maelstrom",
                "Desolator"
            ]
        }
    },
    {
        "item_name": "Orb of Venom",
        "item_gold": "275",
        "item_image": "https://liquipedia.net/commons/images/a/a2/Orb_of_Venom.png",
        "ability": {
            "item_info": "Poisons the target, dealing damage over time and slowing. The amount depends on whether the user is melee or ranged.",
            "Melee_Movement_Speed_Slow": "13%",
            "Ranged_Movement_Speed_Slow": "4%",
            "Damage_Per_Second": "2",
            "Duration": "2"
        },
        "creation": {
            "from": [],
            "become": [
                "Orb of Corrosion"
            ]
        }
    },
    {
        "item_name": "Quarterstaff",
        "item_gold": "875",
        "item_image": "https://liquipedia.net/commons/images/8/85/Quarterstaff.png",
        "creation": {
            "from": [],
            "become": [
                "Oblivion Staff",
                "Butterfly",
                "Mask of Madness"
            ]
        }
    },
    {
        "item_name": "Quelling Blade",
        "item_gold": "130",
        "item_image": "https://liquipedia.net/commons/images/4/43/Quelling_Blade.png",
        "ability": {
            "item_info": "Cuts down the target tree.",
            "Tree_Cast_Range": "350",
            "cd": "4"
        },
        "creation": {
            "from": [],
            "become": [
                "Battle Fury"
            ]
        }
    },
    {
        "item_name": "Ring of Protection",
        "item_gold": "175",
        "item_image": "https://liquipedia.net/commons/images/thumb/2/2f/Ring_of_Protection.png/85px-Ring_of_Protection.png",
        "creation": {
            "from": [],
            "become": [
                "Buckler",
                "Urn of Shadows"
            ]
        }
    }
]

const ATTRIBUTES = [
    {
        "item_name": "Band of Elvenskin",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/3/30/Band_of_Elvenskin.png",
        "creation": {
            "from": [],
            "become": [
                "Power Treads",
                "Dragon Lance",
                "Yasha",
                "Dagon"
            ]
        }
    },
    {
        "item_name": "Belt of Strength",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/0/04/Belt_of_Strength.png",
        "creation": {
            "from": [],
            "become": [
                "Power Treads",
                "Skull Basher",
                "Sange",
                "Drum of Endurance"
            ]
        }
    },
    {
        "item_name": "Blade of Alacrity",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/a/a3/Blade_of_Alacrity.png",
        "creation": {
            "from": [],
            "become": [
                "Aghanims Scepter",
                "Yasha",
                "Diffusal Blade",
                "Mage Slayer"
            ]
        }
    },
    {
        "item_name": "Circlet",
        "item_gold": "155",
        "item_image": "https://liquipedia.net/commons/images/5/50/Circlet.png",
        "creation": {
            "from": [],
            "become": [
                "Bracer",
                "Wraith Band",
                "Null Talisman",
                "Urn of Shadows"
            ]
        }
    },
    {
        "item_name": "Crown",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/thumb/4/46/Crown_icon.png/85px-Crown_icon.png",
        "creation": {
            "from": [],
            "become": [
                "Dagon",
                "Meteor Hammer",
                "Helm of the Dominator",
                "Solar Crest",
                "Veil of Discord",
                "Rod of Atos"
            ]
        }
    },
    {
        "item_name": "Gauntlets of Strength",
        "item_gold": "145",
        "item_image": "https://liquipedia.net/commons/images/5/56/Gauntlets_of_Strength.png",
        "creation": {
            "from": [],
            "become": [
                "Bracer",
                "Soul Ring"
            ]
        }
    },
    {
        "item_name": "Iron Branch",
        "item_gold": "50",
        "item_image": "https://liquipedia.net/commons/images/e/eb/Iron_Branch.png",
        "ability": {
            "item_info": "Targets the ground to plant a happy little tree that lasts for a short duration.",
            "Duration": "20",
            "Cast_Range": "400"
        },
        "creation": {
            "from": [],
            "become": [
                "Magic Wand"
            ]
        }
    },
    {
        "item_name": "Mantle of Intelligence",
        "item_gold": "140",
        "item_image": "https://liquipedia.net/commons/images/thumb/7/74/Mantle_of_Intelligence.png/85px-Mantle_of_Intelligence.png",
        "creation": {
            "from": [],
            "become": [
                "Null Talisman"
            ]
        }
    },
    {
        "item_name": "Ogre Axe",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/thumb/f/fc/Ogre_Axe.png/85px-Ogre_Axe.png",
        "creation": {
            "from": [],
            "become": [
                "Echo Sabre",
                "Aghanims Scepter",
                "Black King Bar",
                "Meteor Hammer",
                "Dragon Lance",
                "Sange"
            ]
        }
    },
    {
        "item_name": "Robe of the Magi",
        "item_gold": "450",
        "item_image": "https://liquipedia.net/commons/images/thumb/d/d4/Robe_of_the_Magi.png/85px-Robe_of_the_Magi.png",
        "creation": {
            "from": [],
            "become": [
                "Power Treads",
                "Oblivion Staff",
                "Witch Blade",
                "Kaya",
                "Diffusal Blade",
                "Drum of Endurance"
            ]
        }
    },
    {
        "item_name": "Slippers of Agility",
        "item_gold": "145",
        "item_image": "https://liquipedia.net/commons/images/c/c6/Slippers_of_Agility.png",
        "creation": {
            "from": [],
            "become": [
                "Wraith Band"
            ]
        }
    },
    {
        "item_name": "Staff of Wizardry",
        "item_gold": "1000",
        "item_image": "https://liquipedia.net/commons/images/thumb/c/cd/Staff_of_Wizardry.png/85px-Staff_of_Wizardry.png",
        "creation": {
            "from": [],
            "become": [
                "Euls Scepter of Divinity",
                "Force Staff",
                "Dagon",
                "Aghanims Scepter",
                "Meteor Hammer",
                "Kaya",
                "Rod of Atos"
            ]
        }
    }
]

const CONSUMABLES = [
    {
        "item_name": "Bottle",
        "item_gold": "675",
        "item_image": "https://liquipedia.net/commons/images/5/5d/Bottle.png",
        "ability": {
            "item_info": "Restores HP and mana over time.",
            "Health_Regen": "110",
            "Mana_Regen": "60",
            "Duration": "2.7",
            "Charges": "3",
            "Cast_Range": "350",
            "Nearby_Cast_Range": "600",
            "cd": "0.5"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Clarity",
        "item_gold": "50",
        "item_image": "https://liquipedia.net/commons/images/d/d7/Clarity.png",
        "ability": {
            "item_info": "Restores mana over time.",
            "Mana_Restored": "150",
            "Duration": "25",
            "Cast_Range": "250",
            "Buffer_Cast_Range": "500",
            "Charges": "1"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Dust of Appearance",
        "item_gold": "80",
        "item_image": "https://liquipedia.net/commons/images/thumb/b/b7/Dust_of_Appearance.png/85px-Dust_of_Appearance.png",
        "ability": {
            "item_info": "When activated it will apply a True Sight debuff to all enemy units in the area, revealing them if they are invisible. Cannot reveal wards.",
            "Movement_Speed_Slow": "20%",
            "Reveal_Radius": "1050",
            "Duration": "12",
            "Charges": "1",
            "cd": "30"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Enchanted Mango",
        "item_gold": "65",
        "item_image": "https://liquipedia.net/commons/images/thumb/2/23/Enchanted_Mango.png/85px-Enchanted_Mango.png",
        "ability": {
            "item_info": "Consume the mango to instantly restore mana.",
            "Mana_Restored": "100",
            "Cast_Range": "400",
            "Buffer_Cast_Range": "650",
            "Charges": "1"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Faerie Fire",
        "item_gold": "70",
        "item_image": "https://liquipedia.net/commons/images/f/fe/Faerie_Fire.png",
        "ability": {
            "item_info": "Instantly restores HP.",
            "Health_Restored": "85",
            "Charges": "1",
            "cd": "5"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Healing Salve",
        "item_gold": "110",
        "item_image": "https://liquipedia.net/commons/images/9/9c/Healing_Salve.png",
        "ability": {
            "item_info": "Restores HP over time.",
            "Health_Restored": "400",
            "Duration": "10",
            "Cast_Range": "250",
            "Buffer_Cast_Range": "500",
            "Charges": "1"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Observer ward",
        "item_info": "Plants an Observer Ward, an invisible watcher that gives vision of its surrounding area to your team",
        "Sight_Range": "1400",
        "Duration": "6 minutes",
        "Cast_Range": "500",
        "Charges": "1",
        "cd": "1"
    },
    {
        "item_name": "Sentry ward",
        "item_gold": "50",
        "item_info": "Plants a Sentry Ward, an invisible watcher that grants True Sight, the ability to see invisible enemy units and wards, to any existing allied vision within its range.",
        "True_Sight_Range": "900",
        "True_Sight_Duration": "7 minutes",
        "Sight_Range": "150",
        "Sight_Duration": "12 seconds",
        "Cast_Range": "500",
        "Charges": "1",
        "cd": "1"
    },
    {
        "item_name": "Smoke of Deceit",
        "item_gold": "50",
        "item_image": "https://liquipedia.net/commons/images/b/b4/Smoke_of_Deceit.png",
        "ability": {
            "item_info": "Upon activation, the user and all nearby allies and player controlled units gain smoked invisibility and bonus movement speed for a brief time. Minimap icons will also be hidden. Upon moving within range of an enemy hero or tower, the invisibility is lost.",
            "Bonus_Movement_Speed": "15%",
            "Duration": "35",
            "Smoke_Radius": "1200",
            "Break_Radius": "1025",
            "Charges": "1",
            "cd": "1"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Tango",
        "item_gold": "90",
        "item_image": "https://liquipedia.net/commons/images/9/91/Tango.png",
        "ability": {
            "item_info": "Use a charge to consume a tree. Restores the user's HP slowly over time.",
            "Tree_HP_Restored": "115",
            "Tree_Cast_Range": "165",
            "Tree_Duration": "16",
            "Charges": "3"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Tome of Knowledge",
        "item_gold": "75",
        "item_image": "https://liquipedia.net/commons/images/thumb/4/4c/Tome_of_Knowledge.png/85px-Tome_of_Knowledge.png",
        "ability": {
            "item_info": "Grants the user experience. Experience value increases for each tome consumed by your team.",
            "Experience": "700",
            "XP_Increase_Per_Use": "135",
            "Charges": "1"
        },
        "creation": {
            "from": [],
            "become": []
        }
    },
    {
        "item_name": "Town Portal Scroll",
        "item_gold": "90",
        "item_image": "https://liquipedia.net/commons/images/1/1c/Town_Portal_Scroll.png",
        "ability": {
            "item_info": "Teleports you within close range of a target friendly building. While channeling, gives vision of the target area and pings the minimap. Teleporting to a building takes additional time if any allies have also teleported near the target recently.",
            "Base_Channel_Time": "3",
            "Extended_Channel_Time": "5/5.5/6/6.5 for 1/2/3/4 recent uses",
            "Recent_Teleport_Radius": "1100",
            "Recent_Teleport_Time": "25",
            "Building_Range": "575",
            "Cast_Range": "Global",
            "Charges": "1",
            "cd": "80",
            "mana": "75"
        },
        "creation": {
            "from": [],
            "become": []
        }
    }
]

module.exports = { ARTIFACTS, WEAPONS, ARMOR, MAGICAL, SUPPORT, ACCESSORIES, SECRET_SHOP, MISCELLANEOUS, EQUIPMENTS, ATTRIBUTES, CONSUMABLES }