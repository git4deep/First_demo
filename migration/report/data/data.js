var main_data = {
    "sum": [
        {
            "name": "total",
            "number": 2
        },
        {
            "name": "db",
            "number": 2,
            "detail": {
                ".calculationview": 2
            }
        }
    ],
    "errors": {
        "number": 0,
        "list": []
    },
    "warnings": {
        "number": 1,
        "list": [
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            }
        ]
    },
    "infos": {
        "number": 0,
        "list": []
    },
    "steps": [
        {
            "priority": 4,
            "always-shown": true,
            "name": "Migration of Security Concept Required",
            "desc": "The security concept has changed with XS Advanced and is incompatible with XS Classic. Manual migration steps are required in order to complete the migration of this application to XS Advanced. <br>For information about the XS Advanced security concept read the XS Advanced Migration Guide.",
            "link": {
                "info": "description",
                "url": "undefined#security"
            },
            "messages": {
                "WARNING": [
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    }
                ]
            },
            "list": [
                {
                    "text": "WARNING",
                    "value": 1
                }
            ]
        }
    ],
    "task": {
        "dus": [
            {
                "name": "DEEP_DU",
                "vendor": "saptraining",
                "version": "1.0.0"
            }
        ],
        "packages": [
            "DEEP_MIGRATE"
        ]
    },
    "project": {
        "name": "DEEP_DU",
        "vendor": "saptraining",
        "version": "1.0.0",
        "description": ""
    },
    "cmdline": "--h \"false\" --help \"false\" --generate-manifests \"false\" --zip \"true\" --hta \"false\" --generate-providers \"false\" --unhide-hidden-columns \"false\" --generate-local-slash-synonyms \"false\" --integrated-synonymtargets \"false\" --target-dir \"N:/MIGRATOIN_FOLDER\"",
    "isoTime": "2021-03-26T04:58:29.565Z",
    "mig-tool-version": "1.0.10",
    "system": {
        "host": "wdflbmt7215.wdf.sap.corp",
        "port": "30015",
        "user": "SYSTEM",
        "sid": "H00",
        "hana_version": "2.00.041.00.1560320256"
    }
};