import {
  AlsoLike,
  AlsoLikeTitle,
  DrawerContainer,
  DrawerContent,
  Overlay,
  Title,
  ToggleButton,
} from './styles';
import { Button } from '../../../../../components/Base/Button';
import { HeartIcon } from '../../../../../components/Icons/HeartIcon';

import { CardFeed } from '../../../../../components/CardFeed';
import { useTheme } from 'styled-components';

interface IDrawerPage {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  author: string;
  petSelectedId: string;
  pets: any[];
  firstLetter: string;
}

export function DrawerPage({
  open,
  onClose,
  title,
  description,
  image,
  author,
  petSelectedId,
  pets,
  firstLetter,
}: IDrawerPage) {
  const filteredPets = pets.filter((pet) => pet.id !== petSelectedId);
  const displayPets = filteredPets.slice(0, 3);
  const { colors } = useTheme();
  return (
    <>
      <ToggleButton onClick={onClose}>{open && 'x'}</ToggleButton>
      <Overlay open={open} onClick={onClose} />

      <DrawerContainer open={open}>
        <DrawerContent>
          <Title>
            <div>
              <span>{firstLetter}</span>
              <div>
                <h1>
                  {title} - {description}
                </h1>
                <p>Photography by {author}</p>
              </div>
            </div>

            <Button
              background="transparent"
              icon={<HeartIcon size={28} color={colors.gray[800]} />}
              text="SAVE"
              colorText={colors.gray[800]}
              textSizeInRem="1rem"
              width="100px"
            />
          </Title>
          <img src={image} />
          <AlsoLikeTitle>
            <h1>You may also like</h1>
          </AlsoLikeTitle>
          <AlsoLike>
            {displayPets.map((pet) => (
              <CardFeed
                background={pet.image}
                cardSize="medium"
                title={pet.title}
                description={pet.description}
              />
            ))}
          </AlsoLike>
        </DrawerContent>
      </DrawerContainer>
    </>
  );
}
