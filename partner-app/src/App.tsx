import { DeckProvider } from './deck/DeckContext';
import { S01_Title } from './slides/S01_Title';
import { S02_Challenge } from './slides/S02_Challenge';
import { S03_WhatWeDeliver } from './slides/S03_WhatWeDeliver';
import { S04_NinetyTen } from './slides/S04_NinetyTen';
import { S05_Transition1 } from './slides/S05_Transition1';
import { S06_DataModel } from './slides/S06_DataModel';
import { S07_Pipeline } from './slides/S07_Pipeline';
import { S08_DataQuality } from './slides/S08_DataQuality';
import { S09_Glossary } from './slides/S09_Glossary';
import { S10_Visualization } from './slides/S10_Visualization';
import { S11_LiveDemo } from './slides/S11_LiveDemo';
import { S12_Reusable } from './slides/S12_Reusable';
import { S13_WhyKeboola } from './slides/S13_WhyKeboola';
import { S14_Implementation } from './slides/S14_Implementation';
import { S16_Closing } from './slides/S16_Closing';

export default function App() {
  return (
    <DeckProvider>
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <S01_Title />
        <S02_Challenge />
        <S03_WhatWeDeliver />
        <S04_NinetyTen />
        <S05_Transition1 />
        <S06_DataModel />
        <S07_Pipeline />
        <S08_DataQuality />
        <S09_Glossary />
        <S10_Visualization />
        <S11_LiveDemo />
        <S12_Reusable />
        <S13_WhyKeboola />
        <S14_Implementation />
        <S16_Closing />
      </div>
    </DeckProvider>
  );
}
