<?php

Kirby::plugin('steirico/kirby-plugin-ro-field', [
    'fields' => [
        'ro' => [
            'props' => [
                'value' => function($value = null) {
                    return kirbytext($this->value);
                }
            ]
        ]
    ]
]);