import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { ScrollView, Text, View } from "react-native";
import { BackButton } from "../components/BackButtn";
import { Checkbox } from "../components/Checkbox";
import { ProgressBar } from "../components/ProgressBar";

interface Params {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as Params;

  const parsedDate = dayjs(date);
  const dayOffWeek = parsedDate.format('dddd');
  const dayAndMoth = parsedDate.format('DD/MM');

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />
        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOffWeek}
        </Text>
        <Text className="text-white font-extrabold text-3xl">
          {dayAndMoth}
        </Text>
        <ProgressBar progress={80} />

        <View className="mt-6">
          <Checkbox title="Beber 2L de àgua" />
          <Checkbox title="Caminhar" checked />
        </View>
      </ScrollView>

    </View>
  )
}
