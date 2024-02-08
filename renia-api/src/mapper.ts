export const map = <Source, Output>(
    source: Source
  ): Output => {
    const output: Partial<Output> = {};
    for (const key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        if (key === '_id') {
          (output as any)[key] = String((source as any)[key]);
        } 
        else if (key === 'date') {
          (output as any)[key] = new Date((source as any)[key]).toISOString();
        }
        else {
          (output as any)[key] = (source as any)[key];
        }
      }
    }
    return output as Output;
  };
  