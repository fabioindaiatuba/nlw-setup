import { Check } from "phosphor-react";
import * as Checkbox from '@radix-ui/react-checkbox';
import { FormEvent, useState } from "react";

const availableWeekDays = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
]

export function NewHabitForm() {
  const [title, setTitle] = useState("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  function createNewHabit(event: FormEvent) {
    event.preventDefault();
    console.log(title, weekDays);
  }

  function handleToogleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const newWeekDays = weekDays.filter(day => day !== weekDay);
      setWeekDays(newWeekDays);
    } else {
      setWeekDays([...weekDays, weekDay]);
    }
  }

  return (
    <form className="w-full flex flex-col mt-6" onSubmit={createNewHabit}>
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        autoFocus
        onChange={event => setTitle(event.target.value)}
      />
      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className='mt-3 flex flex-col gap-2'>
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className='flex items-center gap-3 group'
            onCheckedChange={() => handleToogleWeekDay(index)}
          >
            <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800  group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-500'>
              <Checkbox.Indicator >
                <Check size={20} className='text-white' />
              </Checkbox.Indicator>
            </div>

            <span className='text-white leading-tight' >
              {weekDay}
            </span>

          </Checkbox.Root>
        ))}

      </div>

      <button type="submit" className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500">
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  )
}
