import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  it("should diaplay weak if 5 values is passed", () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual('5(weak)');
  });
});
