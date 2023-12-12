import * as React from 'react'
import type { Value } from 'baseui/select'
import { Select } from 'baseui/select'
import { useState } from 'react'

// not work now, todo
export function SelectX() {
    const [value, setValue] = useState<Value>([])
    return (
        <div style={{}}>
            <Select
                options={[
                    { label: 'AliceBlue', id: '#F0F8FF' },
                    { label: 'AntiqueWhite', id: '#FAEBD7' },
                    { label: 'Aqua', id: '#00FFFF' },
                    { label: 'Aquamarine', id: '#7FFFD4' },
                    { label: 'Azure', id: '#F0FFFF' },
                    { label: 'Beige', id: '#F5F5DC' },
                ]}
                value={value}
                placeholder="Select color"
                onChange={params => setValue(params.value)}
            />
        </div>
    )
}
