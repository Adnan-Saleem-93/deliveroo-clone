import {View} from 'react-native'
import {ChevronRightIcon} from 'react-native-heroicons/outline'

const RestaurantPageLoading = () => {
  return (
    <View className="bg-white">
      <View className="w-full h-full">
        <View className="bg-slate-400 h-72 w-full animate-pulse"></View>

        <View className="px-4 flex flex-col gap-y-6 py-8">
          <View className="bg-slate-400 h-10 w-60 animate-pulse" />
          <View className="bg-slate-300 h-6 w-96 animate-pulse" />

          <View className="flex flex-col gap-y-2">
            <View className="bg-slate-200 h-6 w-full animate-pulse" />
            <View className="bg-slate-200 h-6 w-full animate-pulse" />
          </View>
        </View>

        <View className="border border-gray-200 p-4">
          <View className="flex flex-row justify-between gap-x-4 w-full">
            <View className="bg-slate-400 h-8 w-2/3 animate-pulse" />
            <ChevronRightIcon color="#94a3b8" strokeWidth={3} />
          </View>
        </View>

        <View className="p-4 bg-slate-100 pt-10">
          <View className="bg-slate-400 h-8 w-2/3 animate-pulse" />
        </View>

        <View className="w-full">
          {Array.from({length: 5}).map((_, idx) => {
            return (
              <View
                key={`recommended-items-loading-${idx}`}
                className="flex flex-row justify-between gap-x-6 border border-gray-200 w-full p-4"
              >
                <View className="flex flex-col justify-center gap-y-3 w-1/2">
                  <View className="bg-slate-300 h-8 w-full animate-pulse" />
                  <View className="bg-slate-200 h-8 w-full animate-pulse" />
                  <View className="bg-slate-200 h-8 w-full animate-pulse" />
                </View>
                <View>
                  <View className="rounded-md h-40 w-40 bg-slate-300 animate-pulse" />
                </View>
              </View>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default RestaurantPageLoading
