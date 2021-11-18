import clsx from "clsx";
import Section from "@/components/Section";
import Color from "@/components/Color";

import pallet from "@/data/colors";

export default function Colors() {
  return (
    <Section title="Colors">
      {pallet.map((color) => (
        <div key={color.name}>
          <h3 className="text-xl mb-2 capitalize">{color.name}</h3>
          <div className="flex gap-2">
            {color.colors.map((color) => (
              <Color
                key={color.name}
                className={clsx(
                  color.className,
                  color?.isTextWhite ? "text-white" : null
                )}
                name={color.name}
              />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
