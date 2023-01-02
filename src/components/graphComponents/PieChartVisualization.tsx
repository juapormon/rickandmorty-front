
import { CharacterEpisodeSummary } from "components/CharacterCard";
import { FC, useEffect, useState } from "react";
import { VegaLite, VisualizationSpec } from "react-vega";


interface PieData {
  category: string
  value: number
}

interface PieChartProps{ 
  data: CharacterEpisodeSummary
  chartWidth: number
  chartHeight: number
}

export const PieChartVisualization: FC<PieChartProps> = ({data, chartWidth, chartHeight}) => {

  const [pie, setPie] = useState<Array<PieData>>([]);

  useEffect(() =>{
    const parsedData = [
      {value: data.showUp, category: "show up"},
      {value: data.notShowUp, category: "not show up"}
    ]
    setPie(parsedData);
  }, [data])

  const spec: VisualizationSpec = {
    width: chartWidth,
    height: chartHeight,
    mark: "arc",
    encoding: {
        theta: { field: "value", type: "quantitative" },
        color: { field: "category", type: "nominal" }
    },
    data: { name: "pieValues" } 
  };

  const pieData = {
    pieValues: pie
  };

  return <VegaLite spec={spec} data={pieData} actions={false}/>
};
