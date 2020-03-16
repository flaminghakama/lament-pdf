/*
 *  Song specificiation for Alt Jazz song Lament 
 */

var altJazzSongs = altJazzSongs || {};

altJazzSongs["Lament"] = {

    partsInBooks: {
        "Flute, Alto Flute & Piccolo": {
            "Lament": [ "Flute" ], 
        },
        "English Horn": {
            "Lament": [ "English Horn in F" ], 
        },
        "Bass Clarinet": {
            "Lament": [ "Bass Clarinet in Bb" ],
        },
        "Voice/Percussion": {
            "Lament": [ "Voice" ],
        },
        "Drums": {
            "Lament": [ "Drums" ], 
        },
        "Violin I": {
            "Lament": [ "Violin I" ], 
        },
        "Violin II": {
            "Lament": [ "Violin II" ], 
        },
        "Viola": {
            "Lament": [ "Viola" ], 
        },
        "'Cello": {
            "Lament": [ "'Cello" ],
        },
        "Bass": {
            "Lament": [ "Bass" ], 
        }
    },

    songs: {

        "Lament": {
            metadata: { 
                title: "Lament",
                composer: "Elaine Paul",
                arranger: "Elaine Paul",
                genre: "Afro-Cuban Jazz",
                bpm: 'BPM',
                key: "KEY"
            },
            fileLocation: "scores/lament/pdf",
            filePrefix: "lament",
            parts: {
                "Flute": { fileSuffix: "Flute" },
                "English Horn in F": { fileSuffix: "English-Horn-in-F" },
                "Clarinet in A": { fileSuffix: "Clarinet-in-A" },
                "Bass Clarinet in Bb": { fileSuffix: "Bass-Clarinet-in-Bb" },
                "Bassoon": { fileSuffix: "Bassoon" },
                "Trumpet in Bb": { fileSuffix: "Trumpet-in-Bb" },
                "Horn in F": { fileSuffix: "Horn-in-F" },
                "Trombone": { fileSuffix: "Trombone" },
                "Clave": { fileSuffix: "Clave" },
                "Piano": { fileSuffix: "Piano" },
                "Voice": { fileSuffix: "Voice" },
                "Violin I": { fileSuffix: "Violin-I" },
                "Violin II": { fileSuffix: "Violin-II" },
                "Viola": { fileSuffix: "Viola" },
                "Cello": { fileSuffix: "Cello" },
                "Bass": { fileSuffix: "Bass" },
            },
            scores: {
                "Rhythm": { fileSuffix: "Rhythm" },
                "Condensed Score": { fileSuffix: "Condensed-Score" },
                "Score Transposed": { fileSuffix: "Score-Transposed" },
                "Score Concert": { fileSuffix: "Score-Concert" },
                "Lead Sheet": { fileSuffix: "Lead-Sheet" },
            },
            recordings: {
                demo: {
                    description: 'demo',
                    url: ''
                },
                reading: {
                    description: 'reading',
                    url: ''
                },
                recording: {
                    description: 'recording',
                    url: ''
                },
                live: {
                    description: 'live',
                    url: ''
                }
            }
        }
    }
};