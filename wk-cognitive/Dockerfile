FROM mcr.microsoft.com/dotnet/core/sdk:2.2.401 AS build
WORKDIR /app

# copy csproj and restore as distinct layers
COPY Cognitive.Api/*.csproj ./Cognitive.Api/
COPY Cognitive.Core/*.csproj ./Cognitive.Core/
COPY Cognitive.Services/*.csproj ./Cognitive.Services/
COPY Cognitive.Repositories/*.csproj ./Cognitive.Repositories/
WORKDIR /app/Cognitive.Api
RUN dotnet restore

# copy and publish app and libraries
WORKDIR /app/
COPY Cognitive.Api/. ./Cognitive.Api/
COPY Cognitive.Core/. ./Cognitive.Core/
COPY Cognitive.Services/. ./Cognitive.Services/
COPY Cognitive.Repositories/. ./Cognitive.Repositories/
WORKDIR /app/Cognitive.Api
RUN dotnet publish -c Release -o out

# copy build artifacts into runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2.6 AS runtime
WORKDIR /app
COPY --from=build /app/Cognitive.Api/out ./
EXPOSE 8080
ENTRYPOINT ["dotnet", "Cognitive.Api.dll"]