import * as S from './styles';
import { brazilianCurrency } from '../../utils/currency';

const plans = [
  { title: '50 Mega', price: 60, benefits: ['Alta taxa de upload', '100% Fibra ótica', 'Sem limite de consumo'] },
  { title: '100 Mega', price: 80, benefits: ['Alta taxa de upload', '100% Fibra ótica', 'Sem limite de consumo'] },
  { title: '150 Mega', price: 110, benefits: ['Alta taxa de upload', '100% Fibra ótica', 'Sem limite de consumo'] },
];

export default function Plans() {
  return (
    <S.Wrapper>
      <S.Title>Conheça nossos planos</S.Title>
      <S.Description>Assine já a melhor internet Fibra Óptica da região!</S.Description>

      <S.BoxWrapper>
        { plans?.map((plan, key) => (
          <S.Box key={key}>
            <S.Title>{ plan.title }</S.Title>
            <S.Separator />
            <S.Price>{ brazilianCurrency(plan.price) }</S.Price>
            { plan.benefits?.map(benefit => (
              <>
                <S.Separator />
                <S.Benefit>{ benefit }</S.Benefit>
              </>
            )) }
          </S.Box>
        )) }
      </S.BoxWrapper>
    </S.Wrapper>
  );
}
