import type { StateController } from '@stypes/global'

export default function TabSection({ tabItems, activeTab: [activeTab, setActiveTab] }: { tabItems: string[], activeTab: StateController<string> }) {
    return (
        <div className="tabs flex w-full justify-between overflow-x-scroll">
            {tabItems.map(tab => {
                return (
                    <div className={`tab p-2 cursor-pointer hover:bg-gray-200 ${tab === activeTab && 'border-b-2 border-b-[#32ADE6]'}`} onClick={() => setActiveTab(tab)}>
                        <span className={`text-sm font-bold whitespace-nowrap ${tab === activeTab ? 'text-[#32ADE6]' : 'text-[#6B6F89]'}`}>{tab}</span>
                    </div>
                )
            })}
        </div>
    )
}
